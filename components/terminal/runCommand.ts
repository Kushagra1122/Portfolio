import {
  files,
  filesystem,
  helpText,
  welcomeLines,
  type OutputLine,
} from "@/components/terminal/commands";
import { content } from "@/content/site";

export type CommandResult = {
  lines: OutputLine[];
  clear?: boolean;
  exit?: boolean;
  nextDirectory?: string;
};

function resolvePath(cwd: string, target: string): string {
  if (target === "~" || target === "/") return "~/portfolio";
  if (target.startsWith("~/")) return target;
  if (target.startsWith("/")) return `~/portfolio${target}`;

  const parts = cwd.replace(/^~\//, "").split("/").filter(Boolean);
  for (const segment of target.split("/")) {
    if (!segment || segment === ".") continue;
    if (segment === "..") parts.pop();
    else parts.push(segment);
  }
  return `~/${parts.join("/")}`;
}

export function runCommand(
  raw: string,
  cwd: string,
  history: string[],
): CommandResult {
  const trimmed = raw.trim();
  if (!trimmed) return { lines: [] };

  const parts = trimmed.split(/\s+/);
  const command = parts[0].toLowerCase();
  const args = parts.slice(1);
  const lines: OutputLine[] = [{ type: "command", content: `$ ${raw}` }];

  const push = (contentText: string, type: OutputLine["type"] = "output") => {
    contentText.split("\n").forEach((line) => {
      lines.push({ type, content: line });
    });
  };

  switch (command) {
    case "help":
    case "?":
      push(helpText);
      break;
    case "whoami":
      push(`${content.name}\n${content.title}`);
      break;
    case "pwd":
      push(cwd);
      break;
    case "clear":
    case "cls":
      return { lines: welcomeLines, clear: true };
    case "exit":
    case "quit":
      return { lines, exit: true };
    case "history":
      push(history.map((h, i) => `${i + 1}  ${h}`).join("\n") || "(empty)");
      break;
    case "echo":
      push(args.join(" "));
      break;
    case "resume":
      push(`Resume: ${content.resumePath}\nOpen it from the site header or CTA.`);
      break;
    case "ls": {
      const target = args[0] ? resolvePath(cwd, args[0]) : cwd;
      const listing = filesystem[target];
      if (!listing) {
        push(`ls: cannot access '${args[0] ?? target}': No such directory`, "error");
      } else {
        push(listing.join("  "));
      }
      break;
    }
    case "cd": {
      if (!args[0]) {
        return { lines, nextDirectory: "~/portfolio" };
      }
      const next = resolvePath(cwd, args[0]);
      if (!filesystem[next]) {
        push(`cd: no such directory: ${args[0]}`, "error");
      } else {
        return { lines, nextDirectory: next };
      }
      break;
    }
    case "cat": {
      if (!args[0]) {
        push("cat: missing file operand", "error");
        break;
      }
      const key = args[0].replace(/^\.\//, "");
      const fromRoot = files[key];
      const fromCwd = files[`${cwd.replace("~/portfolio/", "")}/${key}`.replace(/^\//, "")];
      const body = fromRoot ?? fromCwd ?? files[`${key}`];
      if (!body) {
        push(`cat: ${args[0]}: No such file`, "error");
      } else {
        push(body);
      }
      break;
    }
    default:
      push(`command not found: ${command}. Type help.`, "error");
  }

  lines.push({ type: "system", content: "" });
  return { lines };
}

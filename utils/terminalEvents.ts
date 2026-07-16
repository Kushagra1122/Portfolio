export const OPEN_TERMINAL_EVENT = "portfolio:open-terminal";

export function openTerminal() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent(OPEN_TERMINAL_EVENT));
  }
}

import React, { useState, useRef, useEffect } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

const InteractiveTerminal = ({ onClose }) => {
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [currentCommand, setCurrentCommand] = useState("");
  const [currentDirectory, setCurrentDirectory] = useState("~/portfolio");
  const [output, setOutput] = useState([
    {
      type: "system",
      content: "────────────────────────────────────────────────────────────",
    },
    {
      type: "system",
      content: "Welcome to kushagra@portfolio",
    },
    {
      type: "system",
      content: "Type 'help' to see commands. ESC to close.",
    },
    {
      type: "system",
      content: "",
    },
    {
      type: "system",
      content: "Portfolio CLI — browse sections and open simple text files.",
    },
    {
      type: "system",
      content: "",
    },
    {
      type: "system",
      content: "Quick start:",
      style: "bold",
    },
    {
      type: "system",
      content: "  $ ls                    - list directories",
    },
    {
      type: "system",
      content: "  $ cd <directory>        - change directory",
    },
    {
      type: "system",
      content: "  $ cat <file>            - view file",
    },
    {
      type: "system",
      content: "",
    },
    {
      type: "system",
      content: "Type 'help' for more commands.",
    },
  ]);
  const [isFocused] = useState(true);
  const inputRef = useRef(null);
  const terminalRef = useRef(null);

  useEffect(() => {
    if (isFocused && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isFocused]);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [output]);


  // Removed scrollToSection - all content will be displayed in terminal as text

  const executeCommand = (cmd) => {
    const trimmedCmd = cmd.trim().toLowerCase();
    const parts = trimmedCmd.split(/\s+/);
    const command = parts[0];
    const args = parts.slice(1);

    const newOutput = [...output];
    
    // Add command to output
    newOutput.push({
      type: "command",
      content: `$ ${cmd}`,
    });

    let commandOutput = "";

    switch (command) {
      case "help":
      case "?":
        commandOutput = `Available Commands:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ls [directory]            List directory contents
  cd <directory>            Change directory
  cat <file>                Display file contents
  pwd                       Print working directory
  clear, cls                Clear terminal screen
  history                    Show command history
  echo <text>                Echo text to terminal
  help, ?                   Show this help message
  exit, quit                 Close terminal

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Directories:
  home/      about/     projects/   techstack/   contact/   education/

Example:
  $ cd home
  $ ls
  $ cat home.txt`;
        break;

      case "guide":
      case "whoami":
      case "date":
      case "uname":
      case "git":
      case "techstack":
      case "skills":
      case "home":
      case "about":
      case "projects":
      case "contact":
      case "education":
        commandOutput = `Command not found: ${command}

Available commands:
  ls [directory]    - List directory contents
  cat <file>        - Display file contents
  pwd               - Print working directory
  clear, cls        - Clear terminal screen
  history           - Show command history
  echo <text>       - Echo text to terminal
  help, ?           - Show help message
  exit, quit        - Close terminal`;
        break;
      case "cd":
        if (args.length === 0) {
          commandOutput = currentDirectory;
        } else {
          const dir = args[0].toLowerCase();
          const validDirs = ["home", "about", "projects", "techstack", "contact", "education"];
          
          if (validDirs.includes(dir)) {
            setCurrentDirectory(`~/portfolio/${dir}`);
            commandOutput = `Changed directory to ${dir}/`;
          } else {
            commandOutput = `Error: Directory "${dir}" not found.

Available directories:
  home/      about/     projects/   techstack/   contact/   education/`;
          }
        }
        break;

      case "pwd":
        commandOutput = currentDirectory;
        break;


      case "cat":
        if (args.length === 0) {
          commandOutput = "Error: No file specified. Usage: cat <file>";
        } else {
          const filePath = args[0];
          let dir = "";
          let file = "";
          
          // Check if file is in a directory (absolute path)
          if (filePath.includes("/")) {
            const parts = filePath.split("/");
            dir = parts[0];
            file = parts[1];
          } else {
            // Relative path - use current directory
            if (currentDirectory !== "~/portfolio") {
              dir = currentDirectory.split("/").pop();
              file = filePath;
            } else {
              commandOutput = `Error: File "${filePath}" not found.

Use 'cat <directory>/<file>' or 'cd <directory>' first.
Example: cat home/${filePath} or cd home then cat ${filePath}`;
              break;
            }
          }
          
          // Check if file is in a directory
          if (dir && file) {
            if (dir === "home" && file === "home.txt") {
              commandOutput = `╔═══════════════════════════════════════════════════════════╗
║                      HOME.TXT                           ║
╚═══════════════════════════════════════════════════════════╝

Name:              Kushagra Tiwari
Role:              Full‑stack developer
Location:          Surathkal, Karnataka, India
Status:            Open to freelance and full‑time roles

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

BIOGRAPHY:
─────────────────────────────────────────────────────────────
I like building practical products for the web and polishing the
small details that make them feel great.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

QUICK STATS:
─────────────────────────────────────────────────────────────
Experience:       2+ Years
Projects:         15+ Completed
Technologies:     20+ Skills
Languages:        6+
Frameworks:       8+
Internships:      2
Status:           Actively building

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SOCIAL LINKS:
─────────────────────────────────────────────────────────────
GitHub:    https://github.com/Kushagra1122
LinkedIn:  https://linkedin.com/in/kushagra-tiwari-aa2354283
Instagram: https://instagram.com/kushagra_._23_`;
            } else if (dir === "about" && file === "about.txt") {
              commandOutput = `╔═══════════════════════════════════════════════════════════╗
║                      ABOUT.TXT                      ║
╚═══════════════════════════════════════════════════════════╝

Name:              Kushagra Tiwari
Role:              Full‑stack developer
Location:          Surathkal, Karnataka, India
Education:         B.Tech in Electrical and Electronics Engineering
Institution:       NIT Karnataka, Surathkal
CGPA:              7.1/10 (Current)
Status:            Open to freelance and full‑time roles

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

BIOGRAPHY:
─────────────────────────────────────────────────────────────
I enjoy turning ideas into simple, useful products. Most days it's
shipping small features, cleaning up rough edges, and learning along
the way. Lately I've been exploring AI and Web3 through small builds.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

KEY HIGHLIGHTS:
─────────────────────────────────────────────────────────────
• Two internships so far — React.js (web) and React Native (mobile)
• Built full‑stack side projects with MERN, Firebase, and WebRTC
• Comfortable with DSA and system design trade‑offs
• Currently learning by building small AI and Web3 experiments
• Care about clean, fast UIs and pragmatic architecture

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CORE SKILLS:
─────────────────────────────────────────────────────────────
• React.js, Node.js, TypeScript, Python
• MongoDB, PostgreSQL, Firebase
• Web3, Solidity, WebRTC
• React Native, Express.js, FastAPI`;
            } else if (dir === "projects" && file === "projects.txt") {
              commandOutput = `╔═══════════════════════════════════════════════════════════╗
║                   PROJECTS.TXT                      ║
╚═══════════════════════════════════════════════════════════╝

TOTAL PROJECTS: 4

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. APPROVAL ORCHESTRATOR
   ─────────────────────────────────────────────────────────
   Period:         Sep 2025 -- Oct 2025
   Description:    An approval workflow that turns manual reviews into
                   clear, trackable steps.
   
   Achievements:
   • Shipped an approval flow with states, audit trails, and retries.
   • Added notifications (Slack, Email, Web) for timely updates.
   • Built simple analytics with Recharts to spot progress and blockers.
   • Handled rollbacks, routing, timeouts, and cron jobs for reliability.
   
   Technologies:   Node.js, SQLite, React, Cron Jobs, Webhooks
   GitHub:         https://github.com/Kushagra1122/approval-orchestrator
   Type:           Full Stack Web Application

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. STREAMSYNC
   ─────────────────────────────────────────────────────────
   Period:         Mar 2025 -- Jul 2025
   Description:    A real‑time video streaming app with low delay and
                   multiple concurrent streams.
   
   Achievements:
   • Built real‑time streaming with focus on stability and low delay.
   • Added live chat, donations, and subscription options.
   • Supported screen sharing and quick session joins.
   • Improved WebRTC signaling for smoother peer connections.
   
   Technologies:   Node.js, React.js, Express.js, MongoDB, WebRTC, Socket.io
   GitHub:         https://github.com/Kushagra1122/StreamSync
   Type:           Full Stack Web Application

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. GET SOCIAL
   ─────────────────────────────────────────────────────────
   Period:         Jan 2025 -- Feb 2025
   Description:    A social app with real‑time chat, friend requests,
                   and simple profiles.
   
   Achievements:
   • Shipped real‑time chat, friend requests, and profile editing.
   • Used JWT auth with role checks and encrypted storage.
   • Tuned MongoDB indexes to handle growing data.
   • Adopted UUIDs to keep identifiers consistent across services.
   
   Technologies:   React Native, Node.js, MongoDB, Express.js, Socket.io
   GitHub:         https://github.com/Kushagra1122/Texting
   Type:           Mobile Application

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. STUDY AI
   ─────────────────────────────────────────────────────────
   Period:         Jun 2025 -- Jul 2025
   Description:    An AI helper for YouTube that summarizes videos and
                   answers questions in context.
   
   Achievements:
   • Built a contextual AI chatbot that understands video transcripts.
   • Used the Gemini API to summarize and answer questions.
   • Split work across FastAPI and Express.js services for responsiveness.
   • Packaged a Chrome extension with a small in‑page button.
   
   Technologies:   FastAPI, Express.js, Gemini API, Chrome Extension
   GitHub:         https://github.com/Kushagra1122/Study-AI
   Type:           Chrome Extension`;
            } else if (dir === "techstack" && file === "techstack.txt") {
              commandOutput = `╔═══════════════════════════════════════════════════════════╗
║                  TECHSTACK.TXT                         ║
╚═══════════════════════════════════════════════════════════╝

PROGRAMMING LANGUAGES:
─────────────────────────────────────────────────────────────
JavaScript      - Core language for web development
TypeScript      - Typed superset of JavaScript for large-scale apps
Python          - Backend scripting and automation
C++             - System programming and algorithms
Swift           - iOS mobile development
SQL             - Database querying and management

FRONTEND TECHNOLOGIES:
─────────────────────────────────────────────────────────────
React.js        - Component-based UI library for web applications
Next.js         - React framework for production with SSR/SSG
React Native    - Cross-platform mobile app development
Tailwind CSS    - Utility-first CSS framework for rapid UI development
HTML/CSS        - Core web markup and styling

BACKEND TECHNOLOGIES:
─────────────────────────────────────────────────────────────
Node.js         - JavaScript runtime for server-side development
Express.js      - Minimal web framework for Node.js
FastAPI         - Modern Python web framework for APIs

DATABASES:
─────────────────────────────────────────────────────────────
MongoDB         - NoSQL document database
PostgreSQL      - Advanced open-source relational database
SQLite          - Lightweight embedded database
Firebase        - Google's mobile and web app platform

WEB3 & BLOCKCHAIN:
─────────────────────────────────────────────────────────────
Solidity        - Smart contract programming for Ethereum
Web3.js         - JavaScript library for Ethereum blockchain

TOOLS & UTILITIES:
─────────────────────────────────────────────────────────────
Git             - Version control system
GitHub          - Code hosting and collaboration platform
Figma           - UI/UX design and prototyping tool
Socket.io       - Real-time bidirectional event-based communication
WebRTC          - Real-time peer-to-peer communication
JWT             - JSON Web Tokens for authentication
REST APIs       - RESTful API design and integration
Chrome APIs     - Browser extension development`;
            } else if (dir === "contact" && file === "contact.txt") {
              commandOutput = `╔═══════════════════════════════════════════════════════════╗
║                    CONTACT.TXT                      ║
╚═══════════════════════════════════════════════════════════╝

EMAIL:
─────────────────────────────────────────────────────────────
kushagratiwari24@gmail.com

LOCATION:
─────────────────────────────────────────────────────────────
Surathkal, Karnataka, India

AVAILABILITY:
─────────────────────────────────────────────────────────────
✓ Open to freelance opportunities
✓ Open to full-time positions
✓ Available for collaborations
✓ Always open to discussing tech

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SOCIAL LINKS:
─────────────────────────────────────────────────────────────
GitHub:    https://github.com/Kushagra1122
LinkedIn:  https://linkedin.com/in/kushagra-tiwari-aa2354283
Instagram: https://instagram.com/kushagra_._23_

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PREFERRED METHODS OF CONTACT:
─────────────────────────────────────────────────────────────
• Email: Best for professional inquiries
• LinkedIn: Best for networking and opportunities
• GitHub: Best for technical discussions`;
            } else if (dir === "education" && file === "education.txt") {
              commandOutput = `╔═══════════════════════════════════════════════════════════╗
║                  EDUCATION.TXT                      ║
╚═══════════════════════════════════════════════════════════╝

ACADEMIC QUALIFICATIONS:
─────────────────────────────────────────────────────────────
Degree:            B.Tech (Bachelor of Technology)
Field:             Electrical and Electronics Engineering
Institution:       National Institute of Technology Karnataka
                  (NIT Surathkal)
Location:          Surathkal, Karnataka, India
Duration:          Aug 2023 – Apr 2027
CGPA:              7.1/10 (Current)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PROFESSIONAL EXPERIENCE:
─────────────────────────────────────────────────────────────

1. FRONTEND DEVELOPER @ ADVISTA (REMOTE)
   Period:          Jan 2025 – Feb 2025
   Role:            Frontend Developer
   
   Achievements:
   • Built modular, responsive UI with React.js & Tailwind CSS
   • Optimized performance using code splitting, lazy loading, and
     refined routing
   • Transformed Figma designs into interactive interfaces with
     efficient state management

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. REACT NATIVE DEVELOPER @ QLUE (REMOTE)
   Period:          May 2025 – Jul 2025
   Role:            React Native Developer
   
   Achievements:
   • Engineered cross-platform mobile apps using React Native with
     modular architecture
   • Implemented real-time chat with Socket.io & Firebase Firestore,
     achieving 99% delivery rate
   • Integrated FCM push notifications to boost user engagement`;
            } else {
              commandOutput = `Error: File "${filePath}" not found. 

Available files:
  home/home.txt
  about/about.txt
  projects/projects.txt
  techstack/techstack.txt
  contact/contact.txt
  education/education.txt`;
            }
          } else if (!dir && !file) {
            // This shouldn't happen, but handle it
            commandOutput = `Error: Invalid file path "${filePath}".

Use format: cat <directory>/<file>
Example: cat home/home.txt

Or use: cd <directory> then cat <file>
Example: cd home then cat home.txt`;
          }
        }
        break;

      case "ls": {
        // Determine which directory to list based on current directory or argument
        let targetDir = currentDirectory;
        if (args.length > 0 && args[0] !== ".") {
          const arg = args[0];
          
          // Check if it's a file
          if (arg.endsWith(".txt")) {
            commandOutput = `Error: "${arg}" is a file, not a directory.

Use 'cat ${arg}' to view file contents.`;
            break;
          }
          
          // If arg is a directory path, use it
          if (arg.includes("/") || arg === "..") {
            if (arg === "..") {
              // Go up one level
              const parts = currentDirectory.split("/");
              if (parts.length > 2) {
                targetDir = parts.slice(0, -1).join("/");
              } else {
                targetDir = "~/portfolio";
              }
            } else {
              // Absolute or relative path
              targetDir = arg.startsWith("~/") ? arg : `~/portfolio/${arg.replace(/\/$/, "")}`;
            }
          } else {
            // Directory name
            targetDir = `~/portfolio/${arg}`;
          }
        }
        
        // List based on current directory
        if (targetDir === "~/portfolio" || targetDir === ".") {
          commandOutput = `total 6
drwxr-xr-x  kushagra  staff  512  .
drwxr-xr-x  kushagra  staff  512  ..
drwxr-xr-x  kushagra  staff  512   home/
drwxr-xr-x  kushagra  staff  512   about/
drwxr-xr-x  kushagra  staff  512   projects/
drwxr-xr-x  kushagra  staff  512   techstack/
drwxr-xr-x  kushagra  staff  512   contact/
drwxr-xr-x  kushagra  staff  512   education/`;
        } else if (targetDir === "~/portfolio/home" || targetDir === "home") {
          commandOutput = `total 1
drwxr-xr-x  kushagra  staff  128  .
drwxr-xr-x  kushagra  staff  160  ..
-rw-r--r--  kushagra  staff  1024  home.txt`;
        } else if (targetDir === "~/portfolio/about" || targetDir === "about") {
          commandOutput = `total 1
drwxr-xr-x  kushagra  staff  128  .
drwxr-xr-x  kushagra  staff  160  ..
-rw-r--r--  kushagra  staff  1024  about.txt`;
        } else if (targetDir === "~/portfolio/projects" || targetDir === "projects") {
          commandOutput = `total 1
drwxr-xr-x  kushagra  staff  128  .
drwxr-xr-x  kushagra  staff  160  ..
-rw-r--r--  kushagra  staff  3072  projects.txt`;
        } else if (targetDir === "~/portfolio/techstack" || targetDir === "techstack") {
          commandOutput = `total 1
drwxr-xr-x  kushagra  staff  128  .
drwxr-xr-x  kushagra  staff  160  ..
-rw-r--r--  kushagra  staff  1536  techstack.txt`;
        } else if (targetDir === "~/portfolio/contact" || targetDir === "contact") {
          commandOutput = `total 1
drwxr-xr-x  kushagra  staff  128  .
drwxr-xr-x  kushagra  staff  160  ..
-rw-r--r--  kushagra  staff  512   contact.txt`;
        } else if (targetDir === "~/portfolio/education" || targetDir === "education") {
          commandOutput = `total 1
drwxr-xr-x  kushagra  staff  128  .
drwxr-xr-x  kushagra  staff  160  ..
-rw-r--r--  kushagra  staff  1536  education.txt`;
        } else {
          commandOutput = `Error: Directory "${targetDir}" not found. 

Available directories:
  home/      about/     projects/   techstack/   contact/   education/`;
        }
        break;
      }


      case "clear":
      case "cls":
        setOutput([]);
        return;

      case "history":
        if (commandHistory.length === 0) {
          commandOutput = "No command history.";
        } else {
          commandOutput = commandHistory.map((cmd, idx) => `${idx + 1}  ${cmd}`).join("\n");
        }
        break;

      case "exit":
      case "quit":
        if (onClose) {
          onClose();
        }
        return;

      case "echo":
        commandOutput = args.join(" ");
        break;

      default:
        commandOutput = `Command not found: ${command}

Available commands:
  ls [directory]    - List directory contents
  cat <file>        - Display file contents
  pwd               - Print working directory
  clear, cls        - Clear terminal screen
  history           - Show command history
  echo <text>       - Echo text to terminal
  help, ?           - Show help message
  exit, quit        - Close terminal`;
    }

    newOutput.push({
      type: "output",
      content: commandOutput,
    });

    setOutput(newOutput);
    setCommandHistory((prev) => [...prev, cmd]);
    setHistoryIndex(-1);
    setCurrentCommand("");
  };


  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      if (currentCommand.trim()) {
        executeCommand(currentCommand);
      }
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setCurrentCommand(commandHistory[newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = historyIndex + 1;
        if (newIndex >= commandHistory.length) {
          setHistoryIndex(-1);
          setCurrentCommand("");
        } else {
          setHistoryIndex(newIndex);
          setCurrentCommand(commandHistory[newIndex]);
        }
      }
    } else if (e.key === "Escape") {
      if (onClose) {
        onClose();
      }
    }
  };

  // Handle ESC key globally to close terminal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && onClose) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [onClose]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget && onClose) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/98 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        className="w-full max-w-5xl h-[700px] border border-green-500/30 rounded-xl overflow-hidden bg-black shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        style={{
          boxShadow: "0 20px 60px rgba(34, 197, 94, 0.25), 0 0 0 1px rgba(34, 197, 94, 0.1)",
        }}
      >
        {/* Terminal Header */}
        <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 px-4 py-3 flex items-center justify-between border-b border-green-500/40">
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              <div 
                className="w-3 h-3 rounded-full bg-red-500 cursor-pointer hover:bg-red-400 transition-all hover:scale-110" 
                onClick={onClose}
                title="Close terminal"
              ></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-400 text-sm font-mono font-semibold">kushagra@portfolio</span>
              <span className="text-green-500">:</span>
              <span className="text-cyan-400">{currentDirectory.replace("~/portfolio", "~")}</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="text-xs text-green-500/70 hover:text-green-400 font-mono px-3 py-1 rounded border border-green-500/30 hover:border-green-500 transition-all"
            >
              ESC
            </button>
          </div>
        </div>

        {/* Terminal Body */}
        <div
          ref={terminalRef}
          className="h-[calc(100%-60px)] overflow-y-auto p-6 font-mono bg-black text-green-400 relative"
          style={{ 
            scrollbarWidth: "thin",
            scrollbarColor: "#22c55e #000000",
            fontFamily: "'JetBrains Mono', 'Fira Code', 'Courier New', monospace",
            fontSize: "14px",
            lineHeight: 1.6
          }}
        >
          {/* Terminal Grid Background */}
          <div 
            className="absolute inset-0 pointer-events-none opacity-[0.03]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(34, 197, 94, 0.15) 1px, transparent 1px),
                linear-gradient(90deg, rgba(34, 197, 94, 0.15) 1px, transparent 1px)
              `,
              backgroundSize: "24px 24px"
            }}
          />
          <AnimatePresence>
            {output.map((item, idx) => (
              <div
                key={idx}
                className="mb-2 relative z-10"
              >
                {item.type === "command" && (
                  <div className="flex items-start gap-2 mb-1.5">
                    <span className="text-green-400 font-bold select-none">$</span>
                    <span className="text-cyan-400 font-mono font-medium">{item.content.substring(2)}</span>
                  </div>
                )}
                {item.type === "output" && (
                  <div className="ml-8 text-green-100 whitespace-pre-wrap leading-relaxed font-mono break-words">
                    {item.content}
                  </div>
                )}
                {item.type === "system" && (
                  <div className={`text-green-400/70 mb-1 ${item.style === "bold" ? "font-bold text-green-300" : ""} leading-relaxed font-mono text-[13px]`}>
                    {item.content}
                  </div>
                )}
              </div>
            ))}
          </AnimatePresence>

          {/* Command Input */}
          <div className="relative mt-4 pt-4 border-t border-green-500/20">
            <div className="flex items-center gap-2">
              <span className="text-green-400 font-bold font-mono">kushagra@portfolio</span>
              <span className="text-green-500">:</span>
              <span className="text-cyan-400 font-mono">{currentDirectory.replace("~/portfolio", "~")}</span>
              <span className="text-green-400 font-bold font-mono text-sm">$</span>
              <input
                ref={inputRef}
                type="text"
                value={currentCommand}
                onChange={(e) => setCurrentCommand(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 bg-transparent border-none outline-none text-green-400 font-mono placeholder-green-500/40 focus:placeholder-green-500/20 transition-colors"
                placeholder="try: help   |   ls   |   cat home/home.txt"
                autoFocus
                spellCheck={false}
              />
              <span className="text-green-400 animate-pulse font-bold text-lg leading-none select-none">█</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default InteractiveTerminal;


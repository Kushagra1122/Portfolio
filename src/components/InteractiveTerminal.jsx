import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const InteractiveTerminal = ({ onClose }) => {
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [currentCommand, setCurrentCommand] = useState("");
  const [currentDirectory, setCurrentDirectory] = useState("~/portfolio");
  const [output, setOutput] = useState([
    {
      type: "system",
      content: "╭─────────────────────────────────────────────────────────────────╮",
    },
    {
      type: "system",
      content: "│  Portfolio CLI  —  Kushagra Tiwari · Full‑stack Developer          │",
      style: "bold",
    },
    {
      type: "system",
      content: "╰─────────────────────────────────────────────────────────────────╯",
    },
    { type: "system", content: "" },
    {
      type: "system",
      content: "Browse sections as directories. Type help for commands. ESC to close.",
    },
    { type: "system", content: "" },
    {
      type: "system",
      content: "Quick start:  ls  ·  cd <dir>  ·  cat <dir>/<file>.txt",
      style: "bold",
    },
    { type: "system", content: "" },
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
        commandOutput = `COMMANDS
────────────────────────────────────────────────────────────────────
  ls [directory]     List directory contents
  cd <directory>     Change directory (cd .. to go up, cd ~ for root)
  cat <file>         Display file (e.g. cat home/home.txt)
  pwd                Print working directory
  whoami             Display current user
  clear, cls         Clear screen
  history            Show command history
  echo <text>        Echo text
  help, ?            Show this help
  exit, quit         Close terminal

DIRECTORIES
────────────────────────────────────────────────────────────────────
  home/   about/   projects/   techstack/   contact/   education/

EXAMPLES
────────────────────────────────────────────────────────────────────
  $ ls                    List root contents
  $ cd projects           Enter projects
  $ cat about/about.txt   View about file`;
        break;

      case "whoami":
        commandOutput = "Kushagra Tiwari\nFull‑stack developer · Open to opportunities";
        break;

      case "guide":
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
  whoami            - Display current user
  clear, cls        - Clear terminal screen
  history           - Show command history
  echo <text>       - Echo text to terminal
  help, ?           - Show help message
  exit, quit        - Close terminal`;
        break;
      case "cd":
        if (args.length === 0) {
          // cd without arguments goes to home directory
          setCurrentDirectory("~/portfolio");
          commandOutput = "Changed directory to ~/portfolio";
        } else {
          const dir = args[0];
          const validDirs = ["home", "about", "projects", "techstack", "contact", "education"];
          
          // Handle special cases: .., ., ~
          if (dir === "..") {
            // Go up one level
            const parts = currentDirectory.split("/");
            if (parts.length > 2) {
              const newDir = parts.slice(0, -1).join("/");
              setCurrentDirectory(newDir);
              commandOutput = `Changed directory to ${newDir.replace("~/portfolio", "~")}`;
            } else {
              // Already at root
              commandOutput = "Already at root directory (~/portfolio)";
            }
          } else if (dir === ".") {
            // Stay in current directory
            commandOutput = `Already in ${currentDirectory.replace("~/portfolio", "~")}`;
          } else if (dir === "~" || dir.startsWith("~/")) {
            // Go to home directory
            setCurrentDirectory("~/portfolio");
            commandOutput = "Changed directory to ~/portfolio";
          } else if (dir.includes("/")) {
            // Handle absolute or relative paths
            let targetDir = dir;
            if (!dir.startsWith("~/")) {
              // Relative path - resolve from current directory
              if (currentDirectory === "~/portfolio") {
                targetDir = `~/portfolio/${dir}`;
              } else {
                const currentParts = currentDirectory.split("/");
                const relativeParts = dir.split("/");
                let resolvedParts = [...currentParts];
                
                for (const part of relativeParts) {
                  if (part === "..") {
                    if (resolvedParts.length > 2) {
                      resolvedParts.pop();
                    }
                  } else if (part !== "." && part !== "") {
                    resolvedParts.push(part);
                  }
                }
                targetDir = resolvedParts.join("/");
              }
            }
            
            // Validate the target directory
            const dirName = targetDir.split("/").pop();
            if (validDirs.includes(dirName) || targetDir === "~/portfolio") {
              setCurrentDirectory(targetDir);
              commandOutput = `Changed directory to ${targetDir.replace("~/portfolio", "~")}`;
            } else {
              commandOutput = `Error: Directory "${dir}" not found.

Available directories:
  home/      about/     projects/   techstack/   contact/   education/`;
            }
          } else {
            // Simple directory name
            const dirLower = dir.toLowerCase();
            if (validDirs.includes(dirLower)) {
              setCurrentDirectory(`~/portfolio/${dirLower}`);
              commandOutput = `Changed directory to ${dirLower}/`;
            } else {
              commandOutput = `Error: Directory "${dir}" not found.

Available directories:
  home/      about/     projects/   techstack/   contact/   education/`;
            }
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
Languages:        6
Frameworks:       8+
Internships:      5
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
CGPA:              7.14/10 (Current)
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
• Two internships so far — React.js (web) and iOS/Swift (mobile)
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

TOTAL PROJECTS: 5

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. POKESHOOT
   ─────────────────────────────────────────────────────────
   Period:         Oct 2025 -- Nov 2025
   Description:    Real-time multiplayer game with Phaser.js and
                   Socket.io; Solidity smart contracts on Moonbeam
                   (ERC-721, escrow, DAO, marketplace) and XCM
                   cross-chain NFT transfers.
   
   Achievements:
   • Built a real-time multiplayer game using Phaser.js and
     Socket.io with ELO-based ranking.
   • Deployed Solidity smart contracts on Moonbeam implementing
     ERC-721 NFTs, escrow, DAO, and marketplace.
   • Enabled XCM cross-chain NFT transfers across Moonbeam, Astar,
     and Asset Hub parachains.
   • Integrated Web3 authentication (SIWE), IPFS storage, and MongoDB.
   
   Technologies:   React, Phaser.js, Node.js, Solidity, Moonbeam
   GitHub:         https://github.com/Kushagra1122/PokeShoot
   Type:           Full Stack / Web3 Game

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. APPROVAL ORCHESTRATOR
   ─────────────────────────────────────────────────────────
   Period:         Sep 2025 -- Oct 2025
   Description:    An approval workflow that turns manual reviews into
                   clear, trackable steps.
   
   Achievements:
   • Developed a workflow automation system with audit trails,
     rollback, and conditional routing.
   • Integrated multi-channel notifications (Slack, Email, Web)
     with approval timeouts.
   • Built a real-time analytics dashboard using Recharts.
   • Implemented cron-based schedulers for cleanup, retries, and
     state synchronization.
   
   Technologies:   Node.js, React, SQLite, Socket.io
   GitHub:         https://github.com/Kushagra1122/approval-orchestrator
   Type:           Full Stack Web Application

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. STREAMSYNC
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

4. GET SOCIAL
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

5. STUDY AI
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

LANGUAGES:
─────────────────────────────────────────────────────────────
JavaScript, TypeScript, Python, C++, SQL, Solidity

FRONTEND:
─────────────────────────────────────────────────────────────
React, Next.js, HTML, CSS

BACKEND & APIs:
─────────────────────────────────────────────────────────────
Node.js, Express, Django, FastAPI, REST, WebSockets, WebRTC

AI / ML:
─────────────────────────────────────────────────────────────
LangChain, LangGraph, RAG, LLM APIs, Whisper, Embeddings

DATABASES & CLOUD:
─────────────────────────────────────────────────────────────
MongoDB, PostgreSQL, Redis, Firebase, GCS

DEVOPS & TESTING:
─────────────────────────────────────────────────────────────
Docker, CI/CD, Nginx, Git, AWS EC2, System Design`;
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

PROFESSIONAL EXPERIENCE (most recent first):
─────────────────────────────────────────────────────────────

1. PIPESHUB (REMOTE)
   Period:          Jan 2026 – Present
   Role:            Backend and AI Engineer
   
   Achievements:
   • Built multiple platform connectors integrating external
     services into the agent ecosystem
   • Implemented integration test suites to ensure reliability
     and stability of service connectors
   • Developed production AI agents capable of orchestrating
     complex multi-step workflows
   • Worked on backend infrastructure supporting agent execution
     pipelines and large-scale service integrations

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

2. BAITAI (REMOTE)
   Period:          Dec 2025
   Role:            Freelance project
   
   Achievements:
   • Developed an AI-powered interview system using Django for
     backend orchestration and API management
   • Integrated OpenAI Whisper with PCM16 audio pipelines for
     accurate real-time speech-to-text transcription
   • Designed scalable media storage using Google Cloud Storage
     (GCS) for interview audio and metadata
   • Implemented end-to-end interview workflows including audio
     capture, transcription, and structured response persistence

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

3. SPOKEN TUTORIAL, IIT BOMBAY (REMOTE)
   Period:          Nov 2025 – Dec 2025
   Role:            Backend and AI Intern
   
   Achievements:
   • Designed and deployed a LangGraph-based course outline
     chatbot generating personalized curricula
   • Engineered a context-aware conversational AI agent
     supporting 10+ turn dialogues with improved response relevance
   • Implemented Google OAuth with domain-level access control
     to secure internal tools
   • Optimized agent workflows and prompt routing, achieving
     ~35% faster response times and reduced token usage

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

4. IOS DEVELOPER @ QLUE (REMOTE)
   Period:          Oct 2025 – Dec 2025
   Role:            iOS Developer
   
   Achievements:
   • Built native iOS applications using Swift, UIKit, and SwiftUI
     following MVVM architecture
   • Integrated REST APIs, authentication flows, and persistent local
     storage
   • Implemented push notifications using APNs and Firebase Cloud
     Messaging
   • Optimized app performance, memory usage, and UI responsiveness

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

5. ACREDGE (REMOTE)
   Period:          Aug 2025 – Oct 2025
   Role:            Software Development Engineer Intern
   
   Achievements:
   • Improved search performance by 60% by refactoring sequential
     pipelines into a parallel processing architecture
   • Built an intent-driven real estate chatbot using n8n with
     workflow-based natural language understanding
   • Developed a recommendation engine using Recombee with
     collaborative and personalized filtering strategies
   • Resolved critical production issues, improving overall system
     reliability and user experience

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

6. LEASTACTIONS (REMOTE)
   Period:          Jun 2025 – Aug 2025
   Role:            Software Development Engineer Intern
   
   Achievements:
   • Developed a modular IDE frontend using TypeScript and
     TanStack Router
   • Built RESTful backend APIs enabling code execution, file
     management, and collaborative workflows
   • Implemented comprehensive unit tests and integration tests
     to ensure API reliability and prevent regressions
   • Deployed services on AWS EC2 with Nginx and configured
     CI/CD pipelines for automated testing and deployment

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

7. FRONTEND DEVELOPER @ ADVISTA (REMOTE)
   Period:          Jan 2025 – Feb 2025
   Role:            Frontend Developer
   
   Achievements:
   • Built modular, responsive UI with React.js & Tailwind CSS
   • Optimized performance using code splitting, lazy loading, and
     refined routing
   • Transformed Figma designs into interactive interfaces with
     efficient state management

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ACADEMIC QUALIFICATIONS:
─────────────────────────────────────────────────────────────
Degree:            B.Tech (Bachelor of Technology)
Field:             Electrical and Electronics Engineering
Institution:       National Institute of Technology Karnataka
                  (NIT Surathkal)
Location:          Surathkal, Karnataka, India
Duration:          Aug 2023 – Apr 2027
CGPA:              7.14/10 (Current)`;
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
  whoami            - Display current user
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-label="Portfolio terminal"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 24 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 24 }}
        transition={{ type: "spring", damping: 28, stiffness: 300 }}
        className="w-full max-w-4xl h-[min(75vh,700px)] border border-green-500/20 rounded-lg overflow-hidden bg-slate-950 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
        style={{
          boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5), 0 0 0 1px rgba(34, 197, 94, 0.08)",
        }}
      >
        {/* Terminal Header */}
        <div className="bg-slate-900/95 px-4 py-3 flex items-center justify-between border-b border-green-500/30">
          <div className="flex items-center gap-4">
            <div className="flex gap-2" aria-hidden>
              <div
                className="w-3 h-3 rounded-full bg-red-500/90 cursor-pointer hover:bg-red-400 transition-colors"
                onClick={onClose}
                title="Close"
                aria-label="Close terminal"
              />
              <div className="w-3 h-3 rounded-full bg-amber-500/80" title="Minimize" />
              <div className="w-3 h-3 rounded-full bg-emerald-500/80" title="Maximize" />
            </div>
            <span className="text-slate-400 text-xs font-mono">Portfolio CLI</span>
            <div className="flex items-center gap-1.5 text-sm font-mono">
              <span className="text-green-400">kushagra@portfolio</span>
              <span className="text-green-600">:</span>
              <span className="text-emerald-400">{currentDirectory.replace("~/portfolio", "~")}</span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-xs text-slate-400 hover:text-green-400 font-mono px-2.5 py-1 rounded border border-slate-600 hover:border-green-500/50 transition-all"
            aria-label="Close (Escape)"
          >
            ESC
          </button>
        </div>

        {/* Terminal Body */}
        <div
          ref={terminalRef}
          className="h-[calc(100%-52px)] overflow-y-auto p-5 font-mono bg-slate-950 text-green-400/90 relative"
          style={{
            scrollbarWidth: "thin",
            scrollbarColor: "rgba(34, 197, 94, 0.4) #0f172a",
            fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
            fontSize: "13px",
            lineHeight: 1.65,
          }}
        >
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.04]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(34, 197, 94, 0.2) 1px, transparent 1px),
                linear-gradient(90deg, rgba(34, 197, 94, 0.2) 1px, transparent 1px)
              `,
              backgroundSize: "20px 20px",
            }}
          />
          <AnimatePresence>
            {output.map((item, idx) => (
              <div key={idx} className="mb-1.5 relative z-10">
                {item.type === "command" && (
                  <div className="flex items-start gap-2 mb-1">
                    <span className="text-green-500 font-semibold select-none shrink-0">$</span>
                    <span className="text-emerald-300/95 font-mono">{item.content.substring(2)}</span>
                  </div>
                )}
                {item.type === "output" && (
                  <pre className="ml-4 text-green-200/90 whitespace-pre-wrap font-mono break-words leading-relaxed text-[13px]">
                    {item.content}
                  </pre>
                )}
                {item.type === "system" && (
                  <div
                    className={`mb-1 font-mono text-[13px] leading-relaxed text-green-400/80 ${item.style === "bold" ? "font-semibold text-green-300/90" : ""}`}
                  >
                    {item.content}
                  </div>
                )}
              </div>
            ))}
          </AnimatePresence>

          {/* Command Input */}
          <div className="relative mt-3 pt-3 border-t border-green-500/15">
            <div className="flex items-center gap-2 min-h-[1.5em]">
              <span className="text-green-500 font-semibold font-mono shrink-0">$</span>
              <span className="text-green-400/80 font-mono shrink-0">kushagra@portfolio</span>
              <span className="text-green-600 shrink-0">:</span>
              <span className="text-emerald-400/90 font-mono shrink-0">{currentDirectory.replace("~/portfolio", "~")}</span>
              <span className="text-green-500 font-mono shrink-0">$</span>
              <input
                ref={inputRef}
                type="text"
                value={currentCommand}
                onChange={(e) => setCurrentCommand(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 min-w-0 bg-transparent border-none outline-none text-green-300 font-mono placeholder-green-600/50 focus:placeholder-green-500/30 text-[13px]"
                placeholder=" Type a command (help for options)"
                autoFocus
                spellCheck={false}
                aria-label="Terminal input"
              />
              <span className="text-green-500 animate-pulse font-normal text-base leading-none select-none shrink-0" aria-hidden>▌</span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default InteractiveTerminal;


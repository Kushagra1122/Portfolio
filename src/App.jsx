import "./App.css";
import Sidebar from "./components/Sidebar";
import ScrollToTop from "react-scroll-to-top";
import { FiArrowUp } from "react-icons/fi";
import { useTheme } from "./context/Theme";
import { useState, useEffect } from "react";
import InteractiveTerminal from "./components/InteractiveTerminal";

function App() {
  const [theme] = useTheme();
  const isLight = theme === "light";
  const [showTerminal, setShowTerminal] = useState(false);

  // Keyboard shortcut to toggle terminal globally
  useEffect(() => {
    const handleKeyPress = (e) => {
      // Ctrl+` or Cmd+` to toggle terminal
      if ((e.ctrlKey || e.metaKey) && e.key === "`") {
        e.preventDefault();
        setShowTerminal((prev) => !prev);
      }
      // ESC to close
      if (e.key === "Escape" && showTerminal) {
        setShowTerminal(false);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [showTerminal]);

  return (
    <div className={`${theme} transition-colors duration-500`}>
      <Sidebar />

      <ScrollToTop
        smooth
        component={<FiArrowUp className="mx-auto" />}
        className={`flex items-center justify-center !rounded-full !shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-green-500/50 ${
          isLight
            ? "!bg-green-50 !text-green-700 border border-green-300 hover:!bg-green-100"
            : "!bg-green-900/40 !text-green-400 border border-green-500/30 hover:!bg-green-900/60"
        }`}
        style={{
          right: "30px",
          bottom: "30px",
          width: "50px",
          height: "50px",
          backdropFilter: "blur(8px)",
        }}
      />

      {/* Global Interactive Terminal */}
      {showTerminal && (
        <InteractiveTerminal onClose={() => setShowTerminal(false)} />
      )}
    </div>
  );
}

export default App;

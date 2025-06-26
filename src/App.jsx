import "./App.css";
import Sidebar from "./components/Sidebar";
import ScrollToTop from "react-scroll-to-top";
import { FiArrowUp } from "react-icons/fi";
import { useTheme } from "./context/Theme";

function App() {
  const [theme] = useTheme();
  const isLight = theme === "light";

  return (
    <div className={`${theme} transition-colors duration-500`}>
      <Sidebar />
      <ScrollToTop
        smooth
        component={<FiArrowUp className="mx-auto" />}
        className={`flex items-center justify-center !rounded-full !shadow-lg transition-all duration-300 hover:scale-110 ${
          isLight
            ? "!bg-white !text-gray-800 border border-gray-200"
            : "!bg-gray-800 !text-white border border-gray-700"
        }`}
        style={{
          right: "30px",
          bottom: "30px",
          width: "50px",
          height: "50px",
          backdropFilter: "blur(8px)",
          backgroundColor: isLight
            ? "rgba(255, 255, 255, 0.8)"
            : "rgba(30, 30, 44, 0.8)",
        }}
      />
    </div>
  );
}

export default App;

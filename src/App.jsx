import "./App.css";
import Sidebar from "./components/Sidebar";
import ScrollToTop from "react-scroll-to-top";
function App() {
  return (
    <>
      <Sidebar />
      <ScrollToTop
        smooth
        color="#f29f67"
        className="p-1.5"
        style={{ backgroundColor: "#1e1e2c", borderRadius: "80px" }}
      />
    </>
  );
}

export default App;

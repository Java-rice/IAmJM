import "./App.css";
import { BrowserRouter as Router, Route, Routes, Outlet } from "react-router-dom";
import Name from "./components/logo/Name";
import TransitionWrapper from "./components/transition/TransitionWrapper";
import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-[#1E2329] no-zoom-out">
      <Name />
      <div className="flex-grow overflow-hidden flex flex-col">
        <TransitionWrapper>
          <Outlet />
        </TransitionWrapper>
      </div>
      <Navigation />
      <Footer className="mt-auto" />
    </div>
  );
}
export default App;

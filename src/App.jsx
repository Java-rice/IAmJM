import "./App.css";
import { BrowserRouter as Router, Route, Routes, Outlet } from "react-router-dom";
import Name from "./components/logo/Name";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import TransitionWrapper from "./components/transition/TransitionWrapper";
import Contacts from "./pages/contacts/Contacts";
import Blogs from "./pages/blog/Blogs";
import Projects from "./pages/projects/Projects";
import Navigation from "./components/navigation/Navigation";

function App() {
  return (
    <div className="bg-[#1E2329] min-h-screen min-w-screen">
      <Name />
      <Navigation></Navigation>
      <TransitionWrapper>
        <Outlet/>
      </TransitionWrapper>
    </div>
  );
}

export default App;

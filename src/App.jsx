import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Name from "./components/logo/Name";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import TransitionWrapper from "./components/transition/TransitionWrapper";
import Contacts from "./pages/contacts/Contacts";
import Blogs from "./pages/blog/Blogs";
import Projects from "./pages/projects/Projects";

function App() {
  return (
    <div className="bg-[#1E2329] min-h-screen min-w-screen">
      <Name />
      <Router>
        <TransitionWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contacts />} />
            <Route path="/blog" element={<Blogs />} />
          </Routes>
        </TransitionWrapper>
      </Router>
    </div>
  );
}

export default App;

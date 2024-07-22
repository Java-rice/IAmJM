import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Name from "./components/logo/Name";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import TransitionWrapper from "./components/transition/TransitionWrapper";

function App() {
  return (
    <div className="bg-[#1E2329] min-h-screen min-w-screen">
      <Name />
      <Router>
        <TransitionWrapper>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </TransitionWrapper>
      </Router>
    </div>
  );
}

export default App;

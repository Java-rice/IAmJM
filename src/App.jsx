import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Outlet, useNavigate } from "react-router-dom";
import Name from "./components/logo/Name";
import TransitionWrapper from "./components/transition/TransitionWrapper";
import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/scroll/ScrollToTop";
import Content from "./pages/Content";

function App() {

  return (
    <div className="flex flex-col min-h-screen bg-[#1E2329] no-zoom-out">
      <Name />
      <Content/>
      <Footer className="" />
    </div>
  );
}

export default App;

import React, { useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes, Outlet, useNavigate } from "react-router-dom";
import Name from "./components/logo/Name";
import TransitionWrapper from "./components/transition/TransitionWrapper";
import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/scroll/ScrollToTop";

function App() {
  const routes = ["/IAmJM/", "/IAmJM/about", "/IAmJM/projects", "/IAmJM/contacts", "/IAmJM/blogs"];
  
  const navigate = useNavigate();
  
  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

      // Scroll to the next route when scrolled to the bottom
      if (scrollTop + clientHeight >= scrollHeight - 500) {
        const currentPath = window.location.pathname;
        const currentIndex = routes.findIndex((route) => route === currentPath);
        const nextIndex = (currentIndex + 1) % routes.length; 
        navigate(routes[nextIndex]);
      }

      if (scrollTop + clientHeight >= scrollHeight + 5) {
        const currentPath = window.location.pathname;
        const currentIndex = routes.findIndex((route) => route === currentPath);
        const nextIndex = (currentIndex - 1) % routes.length; 
        navigate(routes[nextIndex]);
      }

      // Scroll to the top logic
      if (scrollTop === 0) {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navigate]);
  

  return (
    <div className="flex flex-col min-h-screen bg-[#1E2329] no-zoom-out">
      <Name />
      <div className="flex-grow overflow-hidden flex-1 flex flex-col">
        <TransitionWrapper>
          <ScrollToTop />
          <Outlet />
        </TransitionWrapper>
      </div>
      <Navigation />
      <Footer className="mt-auto" />
    </div>
  );
}

export default App;

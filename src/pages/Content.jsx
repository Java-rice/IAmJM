import React, { useEffect } from "react";
import '../App.css'
import {
  BrowserRouter as Router,
  Outlet,
  useNavigate,
} from "react-router-dom";
import TransitionWrapper from "../components/transition/TransitionWrapper";
import Navigation from "../components/navigation/Navigation";
import ScrollToTop from "../components/scroll/ScrollToTop";

const Content = () => {
  const routes = [
    "/IAmJM/",
    "/IAmJM/about",
    "/IAmJM/projects",
    "/IAmJM/contacts",
    "/IAmJM/blogs",
  ];

  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } =
        document.documentElement;

      const currentPath = window.location.pathname;
      const currentIndex = routes.findIndex((route) => route === currentPath);

      if (scrollTop + clientHeight >= scrollHeight - 15) {
        const nextIndex = (currentIndex + 1) % routes.length;
        navigate(routes[nextIndex]);
      } else if (scrollTop <= 5) {
        const prevIndex = (currentIndex - 1 + routes.length) % routes.length;
        navigate(routes[prevIndex]);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navigate, routes]);
  return (
    <div>
      <div className="flex-1 flex flex-col">
        <TransitionWrapper>
          <ScrollToTop />
          <Outlet />
        </TransitionWrapper>
      </div>
      <Navigation />
    </div>
  );
};

export default Content;

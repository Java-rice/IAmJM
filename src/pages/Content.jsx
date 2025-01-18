import React, { useRef } from "react";
import "../App.css";
import {
  BrowserRouter as Router,
  Outlet,
  useNavigate,
  useLocation,
} from "react-router-dom";
import TransitionWrapper from "../components/transition/TransitionWrapper";
import Navigation from "../components/navigation/Navigation";
import ScrollToTop from "../components/scroll/ScrollToTop"

const Content = () => {
  const routes = [
    "/IAmJM/",
    "/IAmJM/about",
    "/IAmJM/projects",
    "/IAmJM/contacts",
    "/IAmJM/blogs",
  ];

  const navigate = useNavigate();
  const location = useLocation();
  const isNavigatingRef = useRef(false);

  return (
    <div className="relative min-h-screen">
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

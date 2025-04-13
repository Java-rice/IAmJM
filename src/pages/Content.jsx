import React, { useRef } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import "@src/App.css";

import TransitionWrapper from "@src/components/transition/TransitionWrapper";
import Navigation from "@src/components/navigation/Navigation";
import ScrollToTop from "@src/components/scroll/ScrollToTop";

const Content = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isNavigatingRef = useRef(false);

  return (
    <>
      <div className="relative flex-1 flex flex-col px-4">
        <TransitionWrapper>
          <ScrollToTop />
          <Outlet />
        </TransitionWrapper>
      </div>
      <Navigation />
    </>
  );
};

export default Content;

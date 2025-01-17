import React, { useEffect, useRef } from "react";
import '../App.css';
import {
  BrowserRouter as Router,
  Outlet,
  useNavigate,
  useLocation,
} from "react-router-dom";
import TransitionWrapper from "../components/transition/TransitionWrapper";
import Navigation from "../components/navigation/Navigation";

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
  const topTriggerRef = useRef(null);
  const bottomTriggerRef = useRef(null);
  const isNavigatingRef = useRef(false);

  const smoothScrollTo = (targetY) => {
    const startY = window.scrollY;
    const distance = targetY - startY;
    const duration = 600;
    let startTime = null;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const percentage = Math.min(progress / duration, 1);

      window.scrollTo(0, startY + distance * percentage);
      if (percentage < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 0.9, 
    };

    const handleIntersection = (entries) => {
      if (isNavigatingRef.current) return;

      entries.forEach((entry) => {
        const currentIndex = routes.findIndex((route) => route === location.pathname);

        if (entry.isIntersecting) {
          isNavigatingRef.current = true;

          if (entry.target === topTriggerRef.current && currentIndex > 0) {
            const prevIndex = currentIndex - 1;
            navigate(routes[prevIndex], { replace: true });

            setTimeout(() => {
              smoothScrollTo(document.documentElement.scrollHeight);
            }, 100);
          } else if (entry.target === bottomTriggerRef.current && currentIndex < routes.length - 1) {
            const nextIndex = currentIndex + 1;
            navigate(routes[nextIndex], { replace: true });

            setTimeout(() => {
              smoothScrollTo(0);
            }, 100);
          }

          // Reset navigation lock after animation
          setTimeout(() => {
            isNavigatingRef.current = false;
          }, 700);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    if (topTriggerRef.current) {
      observer.observe(topTriggerRef.current);
    }
    if (bottomTriggerRef.current) {
      observer.observe(bottomTriggerRef.current);
    }

    return () => {
      if (topTriggerRef.current) {
        observer.unobserve(topTriggerRef.current);
      }
      if (bottomTriggerRef.current) {
        observer.unobserve(bottomTriggerRef.current);
      }
    };
  }, [navigate, routes, location.pathname]);

  return (
    <div className="relative min-h-screen">
      {/* Invisible trigger div at the top */}
      <div 
        ref={topTriggerRef}
        className="absolute top-0 h-4 w-full pointer-events-none"
        aria-hidden="true"
      />
      
      <div className="flex-1 flex flex-col">
        <TransitionWrapper>
          <Outlet />
        </TransitionWrapper>
      </div>

      {/* Invisible trigger div at the bottom */}
      <div 
        ref={bottomTriggerRef}
        className="absolute bottom-0 h-4 w-full pointer-events-none"
        aria-hidden="true"
      />
      
      <Navigation />
    </div>
  );
};

export default Content;

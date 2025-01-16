import React, { useEffect, useRef } from "react";
import '../App.css'
import {
  BrowserRouter as Router,
  Outlet,
  useNavigate,
  useLocation,
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
  const location = useLocation();
  const topTriggerRef = useRef(null);
  const bottomTriggerRef = useRef(null);
  const isNavigatingRef = useRef(false);

  useEffect(() => {
    // Reset navigation lock when route changes
    const timeout = setTimeout(() => {
      isNavigatingRef.current = false;
    }, 1000);

    return () => clearTimeout(timeout);
  }, [location.pathname]);

  useEffect(() => {
    const observerOptions = {
      root: null,
      threshold: 1.0,
    };

    const handleIntersection = (entries) => {
      if (isNavigatingRef.current) return;

      entries.forEach((entry) => {
        const currentIndex = routes.findIndex((route) => route === location.pathname);

        if (entry.isIntersecting) {
          isNavigatingRef.current = true;

          if (entry.target === topTriggerRef.current && currentIndex > 0) {
            // Navigate to previous page
            const prevIndex = currentIndex - 1;
            navigate(routes[prevIndex], { replace: true });
            
            // Scroll to bottom of new page after a short delay
            setTimeout(() => {
              window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: 'smooth'
              });
            }, 100);
          } else if (entry.target === bottomTriggerRef.current && currentIndex < routes.length - 1) {
            // Navigate to next page
            const nextIndex = currentIndex + 1;
            navigate(routes[nextIndex], { replace: true });
            
            // Scroll to top of new page
            window.scrollTo({
              top: 0,
              behavior: 'smooth'
            });
          }

          // Reset navigation lock after animation
          setTimeout(() => {
            isNavigatingRef.current = false;
          }, 1000);
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
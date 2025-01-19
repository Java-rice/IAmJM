import React from 'react';
import { useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import '@src/components/transition/TransitionWrapper.css'; 

const TransitionWrapper = ({ children }) => {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        timeout={500}
        classNames="fade"
      >
        <div className="transition-wrapper">
          {children}
        </div>
      </CSSTransition>
    </TransitionGroup>
  );
};

export default TransitionWrapper;
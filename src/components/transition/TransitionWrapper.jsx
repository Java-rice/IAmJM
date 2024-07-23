import React from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import { useLocation } from 'react-router-dom';

const TransitionWrapper = ({ children }) => {
  const location = useLocation();
  return (
    <SwitchTransition>
      <CSSTransition
        key={location.pathname}
        classNames="fade"
        timeout={300}
      >
        <div>
          {children}
        </div>
      </CSSTransition>
    </SwitchTransition>
  );
};

export default TransitionWrapper;
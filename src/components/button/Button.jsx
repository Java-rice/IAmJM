// src/components/buttons/Button.jsx
import * as React from "react";
import { cva } from "class-variance-authority";
import { Link } from "react-router-dom";

const buttonVariants = cva(
  "inline-flex font-poppins items-center justify-center text-base font-medium",
  {
    variants: {
      variant: {
        default:
          "bg-slate-900 text-white hover:bg-slate-700 dark:bg-slate-50 dark:text-slate-900",
        solid:
          "bg-[#F5B301] text-sm py-3 px-6 content-box text-[#2A2E34] border-[#F5B301] border-2 font-bold hover:bg-[#FED154] transition duration-300",
        long_solid:
          "bg-[#F5B301] text-sm py-3 px-10 text-[#2A2E34] font-bold hover:bg-[#FED154] transition duration-300",
        bordered:
          "bg-[#2A2E34] text-sm py-3 px-6 content-box text-[#F5B301] border-[#F5B301] border-2 font-bold hover:bg-[#FED154]  hover:text-[#2A2E34] transition duration-300" 
        
      },
      size: {
        default: "h-10 py-2 px-4",
        sm: "h-9 px-2",
        lg: "h-11 px-8",
      },
      width: {
        default: "w-auto",
        sm: "w-10 px-auto",
        lg: "w-15 px-auto",
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default",
      width: "default"
    },
  }
);

const Button = React.forwardRef(
  ({ className, children, href, variant, size, ...props }, ref) => {
    const buttonClasses = buttonVariants({ variant, size }) + " " + className;

    if (href) {
      return (
        <Link to={href} className={buttonClasses}>
          {children}
        </Link>
      );
    }

    return (
      <button className={buttonClasses} ref={ref} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };

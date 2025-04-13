import React from "react";
import { useNavigate } from "react-router-dom";
import { AlertCircle } from "lucide-react";
import { Button } from "@src/components/button/Button";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[75vh] flex items-center justify-center px-6 md:px-[10%] py-12">
      <div className="text-center flex flex-col items-center gap-6 max-w-xl">
        <AlertCircle className="text-[#F5B301]" size={60} />

        <h1 className="text-4xl md:text-5xl font-extrabold text-white">Page Not Found</h1>

        <p className="text-white text-base md:text-lg leading-relaxed">
          Oops! The page you’re looking for doesn’t exist or has been moved. Let’s get you back on track.
        </p>

        <div className="flex gap-4 justify-center pt-4 flex-wrap">
          <Button variant="solid" onClick={() => navigate("/IAmJM/")}>
            Go to Homepage
          </Button>
          <Button variant="bordered" onClick={() => navigate(-1)}>
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

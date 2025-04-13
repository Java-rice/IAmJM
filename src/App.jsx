import React, { useEffect } from "react";
import "@src/App.css";
import Name from "@src/components/logo/Name";
import Footer from "@src/components/footer/Footer";
import Content from "@src/pages/Content";

function App() {

  return (
    <div className="flex flex-col h-full min-h-screen bg-[#1E2329] no-zoom-out">
      <Name />
      <Content/>
      <Footer className="" />
    </div>
  );
}

export default App;

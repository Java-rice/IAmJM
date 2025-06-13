import React from "react";
import "@src/App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Name from "@src/components/logo/Name";
import Footer from "@src/components/footer/Footer";
import Content from "@src/pages/Content";

// Pages
import Home from "@src/pages/Home";
import About from "@src/pages/About";
import Projects from "@src/pages/Projects";
import ProjectDetails from "@src/pages/ProjectDetails";
import Blogs from "@src/pages/Blogs";
import BlogDetails from "@src/pages/BlogDetails";
import Contacts from "@src/pages/Contacts";
import NotFound from "@src/pages/NotFound";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="flex flex-col h-full min-h-screen bg-[#1E2329] no-zoom-out">
      <Name />
      <Router>
        <Routes>
          <Route path="/IAmJM" element={<Content />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="projects" element={<Projects />} />
            <Route path="projects/:id" element={<ProjectDetails />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="blogs/:id" element={<BlogDetails />} />
            <Route path="contacts" element={<Contacts />} />
            <Route path="*" element={<NotFound />} />
          </Route>
          {/* Optional: redirect base path to /IAmJM */}
          <Route path="*" element={<Navigate to="/IAmJM" replace />} />
        </Routes>
      </Router>
      <Footer />
      {/* Toast container is placed here to make it accessible globally */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeButton={true}
        pauseOnHover={true}
        theme="colored"
      />
    </div>
  );
}

export default App;

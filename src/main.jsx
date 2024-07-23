import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './pages/home/Home.jsx'
import About from './pages/about/About.jsx'
import Contacts from './pages/contacts/Contacts.jsx'
import Blogs from './pages/blog/Blogs.jsx'
import Projects from './pages/projects/Projects.jsx'
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/iamjm/",
    element: <App />,
    children: [
      {
        path: "/iamjm/",
        element: <Home />,
      },
      {
        path: "/iamjm/about",
        element: <About />,
      },
      {
        path: "/iamjm/projects",
        element: <Projects />,
      },
      {
        path: "/iamjm/contacts",
        element: <Contacts />,
      },
      {
        path: "/iamjm/blogs",
        element: <Blogs />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
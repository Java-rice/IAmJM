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
    path: "/IAmJm/",
    element: <App />,
    children: [
      {
        path: "/IAmJm/",
        element: <Home />,
      },
      {
        path: "/IAmJm/about",
        element: <About />,
      },
      {
        path: "/IAmJm/projects",
        element: <Projects />,
      },
      {
        path: "/IAmJm/contacts",
        element: <Contacts />,
      },
      {
        path: "/IAmJm/blogs",
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
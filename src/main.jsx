import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import AboutMe from "./pages/AboutMe";
import Projects from "./pages/Project";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

import "./assets/css/index.css";

import { projectsData, aboutData, contactData } from "./data/data.jsx";

const router = createBrowserRouter({
  path: "/",
  element: <App />,
  children: [
    {
      path: "/about",
      element: <AboutMe />,
    },
    {
      path: "/projects",
      element: <Projects data={projectsData} />,
    },
    {
      path: "/contact",
      element: <Contact data={contactData} />,
    },
  ],
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}></RouterProvider>
);

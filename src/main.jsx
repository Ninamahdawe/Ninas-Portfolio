import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AboutMe from "./pages/AboutMe.jsx";
import Project from "./pages/Project.jsx";
import Contact from "./pages/Contact.jsx";
import Home from "./pages/Home.jsx";
import App from "./App";

import { aboutData, projectsData, contactData } from "./data/data.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <AboutMe data={aboutData} />,
      },
      {
        path: "projects",
        element: <Project data={projectsData} />,
      },
      {
        path: "contact",
        element: <Contact data={contactData} />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

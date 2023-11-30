import React from 'react'
import { createBrowserRouter, RouterProvider, useHref } from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Home from './pages/Home';
import App from './App.jsx'
import './assets/css/index.css'

import { projectsData, aboutData, contactData } from './data/data.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home  data={aboutData} />,
  },
  {
    path: "aboutme",
    element: <AboutMe data={aboutData} />,
  },
  {
    path: "portfolio",
    element: <Projects data={projectsData} />,
  },
  {
    path: "contact",
    element: <Contact data={contactData} />,
  },
]);

<>


</>

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

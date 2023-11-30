import React from 'react'
import styled from 'styled-components';
import { Outlet } from "react-router-dom";
import {Nav } from './components/Nav';
import {Footer} from './components/Footer';
import {Home} from './components/Home';
import {About} from './components/About';
import {Projects} from './components/Projects';
import {Contact} from './components/Contact';
import {footerData} from './data/footerData';
import './assets/css/App.css'

function App() {
  return (
    <>
     <Nav  />
     <Outlet />
     <Home />
     <About />
     <Projects />
     <Contact />
     <Footer data={footerData}></Footer>
    </>
  );
}

export default App;
  

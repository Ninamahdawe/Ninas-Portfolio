import React from 'react'
import { Outlet } from "react-router-dom";
import {Nav } from './components/Nav';
import {Footer} from './components/Footer';
import {footerData} from './data/footerData';
import './assets/css/App.css'

function App() {
  return (
    <>
     <Nav  />
     <Outlet />
          <Footer data={footerData}></Footer>
    </>
  );
}

export default App;

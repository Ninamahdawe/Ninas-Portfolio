import React from 'react';
import ReactDom from 'react-dom';
import '/assets/css/styles.css';

function App() {
    return (
        <>
              <Nav />
              <Outlet />
              <Footer data={footerData}></Footer>

        </>
    );
}
export default App;
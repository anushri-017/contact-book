import React from 'react';
import "./Styles/App.css";
import  Navbar from "./Layouts/Navbar";



function App() {
  return (
    <div className="App">
       <h1><b>
       <span role="img" aria-label="Telephone">☎️ </span>
       Contact-Book
       <span role="img" aria-label="Telephone">☎️ </span>
       </b></h1>
       <Navbar/>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import React from 'react'
import db from './firebase';
import { useEffect, useState } from 'react';
import Sidebar from './Sidebar.js';


 
function App() {


  return (
    
    <div className="app">  
    
      {/* <h1>Wisdome choice</h1> */}

      <div className="app__body">
        {/* <h1>
          HEllow world
        </h1> */}
        <Sidebar />
      </div>
    
     </div>
      );
}

export default App;

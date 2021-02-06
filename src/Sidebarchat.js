import React from 'react'
import Sidebar from './Sidebar.js';

function Sidebarchat({name,id,Duration}) {
    return (
        <div className="Sidebarchat">
           <h2>
               Price of the course
           </h2>
            <h1> {name} </h1>
            <h2>
               Duration of the course
           </h2>
            <h1>
            {Duration}
            </h1>
******************************************************

          
            
        </div>
    )   
}

export default Sidebarchat

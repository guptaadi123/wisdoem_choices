import React from 'react';
import './App.css';
import db from './firebase';
import {useEffect} from "react";
import  {useState } from "react";
import Sidebarchat from "./Sidebarchat";


export default function Sidebar() {
    const hello=useState();

    const [rooms,setRooms]= useState([]);
    useEffect(() => {
        db.collection('Courses').onSnapshot(snapshot=>
            (     
            setRooms(

                snapshot.docs.map(doc => ({
                    id:doc.id,
                    data:doc.data(),
                }))
            )
        ),)
     
        
    }, [])
    
    // console.log("aditya")
    // console.log(setRooms)
    
    return (
        // 
            
        // 
        <div className='Sidebar'>
            <div className='Side__chat'>
            {rooms.map(room =>(
             <Sidebarchat  
             
             id={room.id}
               name={room.data.price}
               Duration={room.data.duration}
              
              />
                
                
                

           ),
           )}

            </div>
        
           

        </div>




    );
}


import React from "react";
import  './Main.css';


function TimerComponent (props)  {
  
    return (
        <div className="center">
         <h1>
            <div>
            {props.time.h<10?"0"+props.time.h:props.time.h}:
            {props.time.m<10?"0"+props.time.m:props.time.m}:
             {(props.time.s<10?"0"+props.time.s:props.time.s)}
             </div>
         </h1>
       
         
        </div>
    );
  }
  
  export default TimerComponent;
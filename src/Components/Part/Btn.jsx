// import React ,{useState, useEffect} from 'react';

// function Btn() {
//   const[sec,setSec] = useState(0);
//   const[min,setMin] = useState(0);
//   const[hrs , setHrs] = useState(0);

//   var timer;

//     useEffect(()=>{
//     timer=setInterval(() => {
//       sec(0)
//       setSec(sec+1)
//       if(sec===59){
//         setMin(min+1);
//         if( min===59){
//           setHrs(hrs+1)
//           setMin(0);
//         }
//         setSec(0);
//       }
      
//     }, 1000);
//     return ()=>clearInterval(timer);

//   },[])
 
//   const restart =()=>{
//     setSec(sec+1)
//     if(sec===59){
//       setMin(min+1);
//       if( min===59){
//         setHrs(hrs+1)
//         setMin(0);
//       }
//       setSec(0);
//     }
    
  

//    }

//   const stop =()=>{
    
//   }
//   return (
//     <div className="">
//       <div className=''>
//         <div className=''>
//           <h1>
//             HH:MM:SS

//           </h1>
//           <h2>{hrs<10?"0"+hrs:hrs}:{hrs<10?"0"+min:min}:{sec<10?"0"+sec:sec}</h2>
//           <button onClick={restart}> start</button>
//           <button> push</button>
//           <button> save </button>

//         </div>
//       </div>
      
//     </div>
//   );
// }

// export default Btn;



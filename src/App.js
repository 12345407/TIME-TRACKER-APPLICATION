  import React ,{useState} from 'react';
  import './App.css';
  import TimerComponent from './Components/Part/TimerComponent';
 
  import Tasks from './Components/Part/Tasks';
   
  

const App = () => {
  const[time,setTime] =useState({ ms:0 ,s:0,m:0,h:0});
  const[interv,setInterv]=useState();
  const[status,setStatus]=useState(0);
  const[enabled, setEnabled] = useState(false);

  const start =()=>{
    setEnabled(!enabled)
 
    run();
    setInterv(setInterval(run));

  }
  var updateMs=time.ms,updateS=time.s,updateM=time.m,updateH= time.h;

  const run =()=>{
    
    if(updateM ===60){
      updateH++;
      updateM=0;
    }
    if(updateS===60){
      updateM++;
      updateS=0;
    }
    if(updateMs===100){
      updateS++
      updateMs=0;
    }
    updateMs++;
    return setTime({ ms:updateMs ,s:updateS,m:updateM,h:updateH});
  };

  
  const stop =()=>{
    setEnabled(!enabled)
    clearInterval(interv)
  }
  const save =()=>{
    setEnabled(!enabled)
    setStatus(1)
    
  }

  return (
    <div className='main-section'>
      <h1  style={{textAlign:"center"}}> Time Tracker Application</h1>
      <div className='border'>
          <div className='stopwatch'>
            <TimerComponent time={time}/>
            <div>

            <Tasks start={start}
            status={status}
            time={time}
            enabled={enabled}
            setEnabled={setEnabled}
            interv={interv}
            stop={stop}
            save={save}
            
            />
            
            </div>
           
          </div>
          
      
      </div>
    

    </div>
      
 
  );
}

export default App;

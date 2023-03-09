import React ,{useState}from "react";
import  './Main.css';


const Tasks = (props) => {

    const[todos,setTodos]=useState([])
    const[todo,setTodo]=useState("")
    const[todod,setTodod]=useState("")
    const[savedesc,setSavedesc]=useState(0)
    
    

    const togle=()=>{
      
       clearInterval(props.interv)
        setSavedesc(1)
      }

     function heldlesubmit(e){
        e.preventDefault()
        const newTodo ={
            id: new Date().getTime(),
            title:todo,
            desp:todod,
            completed:false,
        }
            setTodos([...todos].concat(newTodo))
            setTodo("")
            setTodod("")
     }
     
     const deletetodo =(id)=>{
        const updatedTodo=[...todos].filter((todo)=> todo.id!==id)
        setTodos(updatedTodo)

     }

    return (
<div className='center'>
  <div className="center">

      <button className= {`${props.enabled ? "  inactive" : "Active button button2"}`}  disabled={props.enabled} onClick={props.start}>start</button>

      <button className= {`${props.enabled ? "   Active button button2"  : "inactive"}`}  disabled={!props.enabled}  onClick={props.stop}>stop</button>
    </div>
    <div>
<div>
<form onSubmit={heldlesubmit}>
            <div>
            <input type="text" 
            className="title-desc" 
            placeholder="Enter Title" 
            onChange={(e)=>setTodo(e.target.value)} 
            value={todo}/> 
            </div>

            <div>
            <input type="text" 
            className="title-desc" 
            placeholder="Enter Description" 
            onChange={(e)=>setTodod(e.target.value)}
             value={todod} />
            </div>
            <button className= {`${props.enabled ? " Active button button2"  : "inactive"}`} disabled={!props.enabled}  type="submit"> save </button>
            

        </form>
        {todos.map((todo)=><div key={todo.id}> 
          <div className="border-save">
            <div>
              <p><b>Title :</b> {todo.title}</p>
            </div>
              <div>
                <p><b>Description :</b> {todo.desp}</p>
              </div>
        </div>
        <button  className= "button " onClick={togle}>save</button>
        <button className="button" onClick={()=>deletetodo(todo.id)}> cencal</button>
        
        <div>
            {(savedesc === 1)?
        
          <div className="">
            <div>
                  <h1> Saved List </h1>
          <h1>
            {props.time.h<10?"0"+props.time.h:props.time.h}:
            {props.time.m<10?"0"+props.time.m:props.time.m}:
            {(props.time.s<10?"0"+props.time.s:props.time.s)}
         </h1>
                  <p className="border-save"><b>{todo.title}</b></p>
              </div>
          </div>:""}
        

        </div>
      </div>)}
    </div>
  </div>

</div>   
    );
  }
  
  export default Tasks;
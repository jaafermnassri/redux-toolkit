import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { deleteTask, doneTask, editTask } from '../features/slice/slice';


const Task = ({el}) => {
    const [editDesc, setEditDesc] = useState(el.description)
    const [edit, setEdit] = useState(false)
    const dispatch = useDispatch();
    const handleClick = ()=>{
        setEdit(!edit)
        dispatch(editTask(el.id,editDesc))
    }
  return (
    <div style={{display:"flex" ,justifyContent:"space-evenly",alignItems:"center"}}>
        {edit? <input type="text" Value={el.description} onChange={e=>setEditDesc(e.target.value)} /> :<h2> {el.description}</h2>}
        <div>
        <button onClick={handleClick}>{edit? "Save" : "Edit" }</button>
        <button onClick={()=>dispatch(deleteTask((el.id)))}>Delete</button>
        <button onClick={()=>dispatch(doneTask(el.id))}>{el.isDone? "Done":"unDone"}</button>
        </div>
    </div>
  )
}

export default Task
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTask } from '../features/slice/slice'
import { v4 as uuidv4 } from 'uuid';
import './Add.css'
const Add = () => {
    const dispatch=useDispatch()
    const [newDesk, setNewDesk] = useState("")
  return (
    <div className='ajouter'>
        <input type="text" onChange={e=>setNewDesk(e.target.value)}/>
        <button onClick={()=>dispatch(addTask({description:newDesk,isDone:false,id:uuidv4()}))}>add</button>
    </div>
  )
}


export default Add
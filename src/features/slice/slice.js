import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    tasks:[{description:"qsddz",id:0,isDone:false}],
  }
  
  export const todoSlice = createSlice({
    name: 'todo',
    initialState:initialState,
    reducers: {
      addTask: (state,{payload}) => {
        state.tasks.push({...payload})
      },
      deleteTask: (state,{payload}) => {
        state.tasks = state.tasks.filter(el=>el.id!==payload)
      },
      editTask: (state,{payload}) => {
        state.tasks=state.tasks.map(el=>el.id===payload.id ? {...el,description:payload.editDesc} : el)
      },
      doneTask:(state,{payload})=> {
        state.tasks = state.tasks.map(el=>el.id===payload ? {...el,isDone: !el.isDone} : el)
      },
      doneList:(state,{payload})=> {
        state.tasks = state.tasks.filter(el=>payload.isDone===true)
      },
    },
    
  })
  
  export const { addTask, deleteTask, editTask ,doneTask,doneList} = todoSlice.actions
  
  export default todoSlice.reducer
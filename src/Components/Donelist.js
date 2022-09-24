import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { doneList } from "../features/slice/slice";

import Task from "./Task";

const Donelist = ({el}) => {
  const donlist = useSelector((state) =>state.todoReducer.tasks);
  donlist.map((e) => (<Task e={e} />))
  const handleClick = ()=>{
    dispatch(doneList(el))
  }
  const dispatch=useDispatch();
  return (
    <div>
      <button onClick={handleClick} style={{backgroundColor:"mediumpurple",margin: 10,padding: 15,border: "none",color: "aliceblue",borderRadius: 15,width: 120,fontSize: 13,fontWeight:"bold"}}>
       Done
      </button>
    </div>
  );
};

export default Donelist;

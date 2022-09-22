import React from "react";
import { useSelector } from "react-redux";
import Task from "../Components/Task";


const Taskslist = () => {
  // const tasks = useSelector((state)=>state.tasks)
  const list = useSelector((state) => state.todoReducer.tasks);

  return (
    <div>
      {list.map((el) => (
        <Task el={el} key={el.id} />
      ))}
    </div>
  );
};

export default Taskslist;

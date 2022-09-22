import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { doneList } from "../features/slice/slice";

import Task from "./Task";

const Donelist = () => {
  const donlist = useSelector((state) =>
    state.todoReducer.tasks.filter((e) => e.isDone == true)
  );
  // const dispatch=useDispatch();
  return (
    <div>
      <button
        onClick={donlist.map((e) => (
          <Task e={e} />
        ))}
      >
        done
      </button>
    </div>
  );
};

export default Donelist;

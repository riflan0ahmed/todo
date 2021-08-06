import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getTasks,
  orderTodo,
  orderRandomDateAsc,
  orderRandomDateDes,
} from "../redux/todoSlice";
import { Task } from "./Task";

export const TaskList = () => {
  const [isVisible, setIsVisible] = useState(true);
  const tasks = useSelector(getTasks);
  const dispatch = useDispatch();

  // Row Ascending/Descending Order Function()
  const handleDesc = () => {
    dispatch(orderTodo());
  };

  // End Date Ascending Order Function()
  const handleRandomAsc = () => {
    dispatch(orderRandomDateAsc());
    setIsVisible(false);
  };

  // End Date Descending Order Function()
  const handleRandomDesc = () => {
    dispatch(orderRandomDateDes());
    setIsVisible(true);
  };

  return (
    <>
      <ul>
        <button className="text-white bg-red-500" onClick={handleDesc}>
          desc
        </button>

        {isVisible === true ? (
          <button className="text-white bg-green-500" onClick={handleRandomAsc}>
            Asc
          </button>
        ) : (
          <button className="text-white bg-blue-500" onClick={handleRandomDesc}>
            Desc
          </button>
        )}

        {tasks ? tasks.map((task) => <Task key={task.id} task={task} />) : null}
      </ul>
    </>
  );
};

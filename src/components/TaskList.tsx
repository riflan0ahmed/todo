import { ChangeEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ITask } from "../interface/Task";
import {
  getTasks,
  orderTodo,
  orderRandomDateAsc,
  orderRandomDateDes,
  checkTodo,
  deleteTodo,
} from "../redux/todoSlice";
import { Task } from "../stories/TaskList/Task/Task";

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

  // Active Style State Function()
  const handleCheck = (task: ITask) => {
    dispatch(checkTodo({ ...task, activeState: !task.activeState }));
  };

  // Remove a Row from Array Function()
  const handleDelete = (task: ITask) => {
    dispatch(deleteTodo(task.id));
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  return (
    <div>
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

        {tasks
          ? tasks.map((task) => (
              <Task
                key={task.id}
                task={task}
                onChange={handleChange}
                onPinTask={() => handleCheck(task)}
                onArchiveTask={() => handleDelete(task)}
              />
            ))
          : null}
        {tasks?.length === 0 ? (
          <div className="flex justify-center h-20">
            <span className="m-auto font-semibold text-gray-600 capitalize">
              You have no tasks
            </span>
          </div>
        ) : null}
      </ul>
    </div>
  );
};

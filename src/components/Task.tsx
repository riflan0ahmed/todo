import { useDispatch } from "react-redux";
import { deleteTodo, checkTodo } from "../redux/todoSlice";
import { ITask } from "../interface/Task";

export const Task = (props: { task: ITask }) => {
  const dispatch = useDispatch();

  // Remove a Row from Array Function()
  const handleDelete = (task: ITask) => {
    dispatch(deleteTodo(task.id));
  };

  // Active Style State Function()
  const handleCheck = (task: ITask) => {
    dispatch(checkTodo({ ...task, activeState: !task.activeState }));
  };

  return (
    <li
      className={`${props.task.activeState === true ? "bg-yellow-500" : null}`}
    >
      <input
        type="checkbox"
        onClick={() => handleCheck(props.task)}
        checked={props.task.activeState}
        onChange={(e) => e.target.checked}
      />
      {props.task.title}
      <button
        className="text-white bg-red-500"
        onClick={() => handleDelete(props.task)}
      >
        Delete
      </button>
    </li>
  );
};

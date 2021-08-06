import { useDispatch } from "react-redux";
import { deleteTodo, checkTodo } from "../redux/todoSlice";
import { IUser } from "../interface/User";

export const User = (props: { user: IUser }) => {
  const dispatch = useDispatch();

  // Remove a Row from Array Function()
  const handleDelete = (user: IUser) => {
    dispatch(deleteTodo(user.id));
  };

  // Active Style State Function()
  const handleCheck = (user: IUser) => {
    dispatch(checkTodo({ ...user, activeState: !user.activeState }));
  };

  return (
    <li
      className={`${props.user.activeState === true ? "bg-yellow-500" : null}`}
    >
      <input
        type="checkbox"
        onClick={() => handleCheck(props.user)}
        checked={props.user.activeState}
        onChange={(e) => e.target.checked}
      />
      {props.user.title}
      <button
        className="text-white bg-red-500"
        onClick={() => handleDelete(props.user)}
      >
        Delete
      </button>
    </li>
  );
};

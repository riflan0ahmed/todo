import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getUsers,
  orderTodo,
  orderRandomDateAsc,
  orderRandomDateDes,
} from "../redux/todoSlice";
import { User } from "./User";

export const Users = () => {
  const [isVisible, setIsVisible] = useState(true);
  const users = useSelector(getUsers);
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

        {users ? users.map((user) => <User key={user.id} user={user} />) : null}
      </ul>
    </>
  );
};

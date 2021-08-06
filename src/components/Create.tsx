import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";

export const Create = () => {
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  // onChange Function
  const handleChange = (value: string) => {
    setName(value);
  };

  // Add a Todo Function
  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(
      addTodo({
        id: new Date().toISOString(),
        title: name,
        activeState: false,
        endDate: new Date(),
      })
    );
  };

  return (
    <div>
      <label>Name</label>
      <input
        type="text"
        placeholder="title"
        onChange={(e) => handleChange(e.target.value)}
      />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";
import { Input } from "../stories/form/Input/Input";
import { Button } from "../stories/form/Button/Button";

export const Create = () => {
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  // onChange Function
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.currentTarget.value);
  };

  // Add a Todo Function
  const handleSubmit = () => {
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
    <div className="flex flex-col mx-5 my-5">
      <label className="my-1 text-left text-gray-600 capitalize">Title</label>
      <Input placeholder="title" value={name} onChange={handleChange} />
      {name.length < 3 ? "minimum length is 3 characters" : null}
      <Button label="Submit" primary={true} onClick={handleSubmit} />
    </div>
  );
};

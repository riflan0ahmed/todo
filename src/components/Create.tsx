import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";
import { Input } from "../stories/Form/Input/Input";
import { Button } from "../stories/Form/Button/Button";

export const Create = () => {
  const [name, setName] = useState("");

  const dispatch = useDispatch();

  // onChange Function
  const HandleChange = (event: ChangeEvent<HTMLInputElement>) => {
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
    <div>
      <label>Name</label>
      <Input placeholder="title" value={name} onChange={HandleChange} />
      {name.length < 3 ? "minimum length is 3 charactors" : null}
      <Button label="Submit" primary={true} onClick={handleSubmit} />
    </div>
  );
};

import { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todoSlice";
import { Input } from "../stories/form/Input/Input";
import { Btn } from "../stories/form/Button/Button";

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
    setName("");
  };

  return (
    <div className="flex flex-col w-2/4 p-10 mx-5 my-5 bg-white 2xl:w-2/5 rounded-xl">
      <h1 className="mb-5 text-xl font-bold text-gray-700">Create a Todo</h1>
      {/* <label className="my-2 font-semibold text-gray-500">Title</label> */}
      <Input
        label="Title"
        value={name}
        variant="filled"
        onChange={handleChange}
      />
      <div className="flex flex-row ml-auto">
        <Btn
          label="Submit"
          onClick={handleSubmit}
          variant="contained"
          color="primary"
          disabled={name.length < 3}
        />
      </div>
    </div>
  );
};

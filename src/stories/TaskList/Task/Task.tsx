import { ChangeEvent } from "react";
import { MdDelete } from "react-icons/md";
import "./task.css";

export interface TaskProps {
  task: {
    id: string;
    title?: string;
    state?: string;
    activeState?: boolean;
  };
  onArchiveTask(arg: string): void;
  onPinTask(arg: string): void;
  onChange(event: ChangeEvent<HTMLInputElement>): void;
}

export const Task = ({
  task = {
    id: "01",
    title: "Todo 01",
    activeState: false,
  },
  onArchiveTask,
  onPinTask,
  onChange,
}: TaskProps) => {
  return (
    <div className="root">
      {/* Checkbox */}
      <label className="checkbox">
        <input
          type="checkbox"
          defaultChecked={task.activeState === true ? true : false}
          onChange={onChange}
          checked={task.activeState}
          onClick={() => onPinTask(task.id)}
        />
      </label>

      {/* Title */}
      <div className="title">
        <label>{task.title}</label>
      </div>

      {/* Pinned */}
      <div className="icon" onClick={() => onArchiveTask(task.id)}>
        <MdDelete size="25" color="gray" />
      </div>
    </div>
  );
};

import { AiTwotoneStar } from "react-icons/ai";
import "./task.css";

export interface TaskProps {
  task: {
    id: string;
    title: string;
    state: string;
  };
  onArchiveTask(arg: string): void;
  onPinTask(arg: string): void;
}

export const Task = ({
  task = {
    id: "01",
    title: "Todo 01",
    state: "state",
  },
  onArchiveTask,
  onPinTask,
}: TaskProps) => {
  return (
    <div className="parent">
      <label className="checkbox">
        <input
          type="checkbox"
          defaultChecked={task.state === "TASK_ARCHIVED"}
          disabled={true}
          name="checked"
        />
        <span
          className="checkbox-custom"
          onClick={() => onArchiveTask(task.id)}
        />
      </label>
      <div className="title">
        <label>{task.title}</label>
      </div>

      <div className="actions" onClick={(event) => event.stopPropagation()}>
        {task.state !== "TASK_ARCHIVED" && (
          <AiTwotoneStar
            size="25"
            color={`${task.state === "TASK_PINNED" ? "gray" : "white"}`}
            onClick={() => onPinTask(task.id)}
            className="icon"
          />
        )}
      </div>
    </div>
  );
};

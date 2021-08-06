import { AiTwotoneStar } from "react-icons/ai";
import "./task.css";

export interface TaskProps {
  tasks: {
    id: string;
    title: string;
    state: string;
  };
  onArchiveTask(arg: string): void;
  onPinTask(arg: string): void;
}

/**
 * Primary UI component for user interaction
 */
export const Task = ({
  tasks = {
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
          defaultChecked={tasks.state === "TASK_ARCHIVED"}
          disabled={true}
          name="checked"
        />
        <span
          className="checkbox-custom"
          onClick={() => onArchiveTask(tasks.id)}
        />
      </label>
      <div className="title">
        <label>{tasks.title}</label>
      </div>

      <div className="actions" onClick={(event) => event.stopPropagation()}>
        {tasks.state !== "TASK_ARCHIVED" && (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <AiTwotoneStar
            size="25"
            color={`${tasks.state === "TASK_PINNED" ? "aqua" : "white"}`}
            onClick={() => onPinTask(tasks.id)}
            className="icon"
          />
        )}
      </div>
    </div>
  );
};

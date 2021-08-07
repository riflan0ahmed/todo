import Checkbox from "@material-ui/core/Checkbox";
import { ChangeEvent } from "react";
import { MdDelete } from "react-icons/md";
import { createTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import "./task.scss";

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

const theme = createTheme({
  palette: {
    primary: {
      // Purple and green play nicely together.
      main: "#2196f3",
    },
  },
});

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
    <div
      className="root"
      style={{ backgroundColor: `${task.activeState ? "LightCyan" : null}` }}
    >
      {/* Checkbox */}
      <ThemeProvider theme={theme}>
        <Checkbox
          onChange={onChange}
          checked={task.activeState}
          onClick={() => onPinTask(task.id)}
          color="primary"
        />
      </ThemeProvider>

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

import { Task } from "./Task/Task";

interface TaskListProps {
  loading: boolean;
  tasks: [];
  // onPinTask(arg: string): void;
  onArchivedTask(arg: string): void;
}

export const TaskList = ({
  loading = false,
  tasks = [],
  // onPinTask,
  onArchivedTask,
}: TaskListProps) => {
  const LoadingRow = (
    <div className="loading-item">
      <span className="glow-checkbox" />
      <span className="glow-text">
        <span>Loading</span> <span>cool</span> <span>state</span>
      </span>
    </div>
  );

  if (loading) return <div className="list-items">{LoadingRow}</div>;
  if (tasks.length === 0)
    return (
      <div className="list-items">
        <div className="list-items">
          <div className="wrapper-message">
            <span className="icon-check" />
            <div className="title-message">You have no tasks</div>
            <div className="subtitle-message">Sit back and relax</div>
          </div>
        </div>
      </div>
    );

  // const tasksInOrder = [
  //   ...tasks.filter((t: any) => t.state === "TASK_PINNED"),
  //   ...tasks.filter((t: any) => t.state !== "TASK_PINNED"),
  // ];

  return (
    <div className="list-items">
      {/* {tasks.map((task, index) => (
        <Task
          key={index}
          task={task}
          onArchiveTask={onArchivedTask(task)}
          // onPinTask={onPinTask}
        />
      ))} */}
    </div>
  );
};

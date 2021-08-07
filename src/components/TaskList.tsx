import { ChangeEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ITask } from "../interface/Task";
import { getTasks, checkTodo, deleteTodo } from "../redux/todoSlice";
import { Task } from "../stories/components/Task/Task";

export const TaskList = () => {
  const tasks = useSelector(getTasks);
  const dispatch = useDispatch();

  // Active Style State Function()
  const handleCheck = (task: ITask) => {
    dispatch(checkTodo({ ...task, activeState: !task.activeState }));
  };

  // Remove a Row from Array Function()
  const handleDelete = (task: ITask) => {
    dispatch(deleteTodo(task.id));
  };

  // onChange Function
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
  };

  return (
    <>
      <div>
        {tasks
          ? tasks.map((task) => (
              <Task
                key={task.id}
                task={task}
                onChange={handleChange}
                onPinTask={() => handleCheck(task)}
                onArchiveTask={() => handleDelete(task)}
              />
            ))
          : null}
        {tasks?.length === 0 ? (
          <div className="flex justify-center h-20">
            <span className="m-auto font-semibold text-gray-600 capitalize">
              You have no tasks
            </span>
          </div>
        ) : null}
      </div>
    </>
  );
};

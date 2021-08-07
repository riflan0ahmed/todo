import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { ITask } from "../interface/Task";

// Define a type for the slice state
export interface TodoState {
  tasks: ITask[] | null;
  task: ITask | null;
}

// Define the initial state using that type
const initialState: TodoState = {
  tasks: [
    {
      id: "1",
      title: "Todo 01",
      activeState: false,
      endDate: new Date("2021-1-10"),
    },
    {
      id: "2",
      title: "Todo 02",
      activeState: false,
      endDate: new Date("2021-2-10"),
    },
    {
      id: "3",
      title: "Todo 03",
      activeState: true,
      endDate: new Date("2021-3-10"),
    },
    {
      id: "4",
      title: "Todo 04",
      activeState: false,
      endDate: new Date("2021-4-10"),
    },
    {
      id: "5",
      title: "Todo 05",
      activeState: false,
      endDate: new Date("2021-5-20"),
    },
  ],
  task: null,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    addTodo: (state: TodoState, action: PayloadAction<ITask>) => {
      state.task = action.payload;
      const newTask = state.task;
      state.tasks?.push(newTask);
    },
    deleteTodo: (state: TodoState, action: PayloadAction<string>) => {
      const filterTask = state.tasks?.filter(
        (task) => task.id !== action.payload
      );
      state.tasks = filterTask as ITask[];
    },
    checkTodo: (state: TodoState, action: PayloadAction<ITask>) => {
      const index = state.tasks?.findIndex(
        (i) => i.id === action.payload.id
      ) as number;
      const list = state.tasks as ITask[];
      list[index] = action.payload;
    },
    orderTodo: (state: TodoState) => {
      state.tasks?.reverse();
    },
    orderRandomDateAsc: (state: TodoState) => {
      const list = state.tasks as ITask[];
      list.sort(function (a, b) {
        var c = new Date(a.endDate) as any;
        var d = new Date(b.endDate) as any;
        return d - c;
      });
    },
    orderRandomDateDes: (state: TodoState) => {
      const list = state.tasks as ITask[];
      list.sort(function (a, b) {
        var c = new Date(a.endDate) as any;
        var d = new Date(b.endDate) as any;
        return c - d;
      });
    },
  },
});

export const {
  addTodo,
  deleteTodo,
  checkTodo,
  orderTodo,
  orderRandomDateAsc,
  orderRandomDateDes,
} = todoSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const getTasks = (state: RootState) => state.todo.tasks;

export default todoSlice.reducer;

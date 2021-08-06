import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { IUser } from "../interface/User";

// Define a type for the slice state
export interface TodoState {
  users: IUser[] | null;
  user: IUser | null;
}

// Define the initial state using that type
const initialState: TodoState = {
  users: [
    {
      id: "1",
      title: "todo1",
      activeState: false,
      endDate: new Date("2020-10-10"),
    },
    {
      id: "2",
      title: "todo2",
      activeState: false,
      endDate: new Date("2020-9-10"),
    },
    {
      id: "3",
      title: "todo3",
      activeState: true,
      endDate: new Date("2020-8-10"),
    },
    {
      id: "4",
      title: "todo4",
      activeState: false,
      endDate: new Date("2020-7-10"),
    },
    {
      id: "5",
      title: "todo5",
      activeState: false,
      endDate: new Date("2020-07-20"),
    },
  ],
  user: null,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    addTodo: (state: TodoState, action: PayloadAction<IUser>) => {
      state.user = action.payload;
      const newUser = state.user;
      state.users?.push(newUser);
    },
    deleteTodo: (state: TodoState, action: PayloadAction<string>) => {
      const filterUser = state.users?.filter(
        (user) => user.id !== action.payload
      );
      state.users = filterUser as IUser[];
    },
    checkTodo: (state: TodoState, action: PayloadAction<IUser>) => {
      const index = state.users?.findIndex(
        (i) => i.id === action.payload.id
      ) as number;
      const list = state.users as IUser[];
      list[index] = action.payload;
    },
    orderTodo: (state: TodoState) => {
      state.users?.reverse();
    },
    orderRandomDateAsc: (state: TodoState) => {
      const list = state.users as IUser[];
      list.sort(function (a, b) {
        var c = new Date(a.endDate) as any;
        var d = new Date(b.endDate) as any;
        return d - c;
      });
    },
    orderRandomDateDes: (state: TodoState) => {
      const list = state.users as IUser[];
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
export const getUsers = (state: RootState) => state.todo.users;

export default todoSlice.reducer;

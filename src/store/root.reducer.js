import { combineReducers } from "redux";
import { todoListReducer } from "./todo.reducer";

export const rootReducer = combineReducers({
  todoList: todoListReducer,
});

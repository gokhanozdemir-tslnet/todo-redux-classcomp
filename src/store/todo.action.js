import { TODO_LIST_ACTION_TYPES } from "././todo.action.types";

export const addTodo = (content) => ({
  type: TODO_LIST_ACTION_TYPES.SET_TODO_LIST,
  payload: content,
});

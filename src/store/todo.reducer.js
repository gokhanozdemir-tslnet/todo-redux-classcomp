import { TODO_LIST_ACTION_TYPES } from "./todo.action.types";

const INITIAL_TODO_LIST_STATE = {
  todoList: [],
};

export const todoListReducer = (
  state = INITIAL_TODO_LIST_STATE,
  action = {}
) => {
  const { type, payload } = action;
  const newTodoList = [...state.todoList, payload];
  console.log("todoListReducer");
  console.log(action);

  switch (type) {
    case TODO_LIST_ACTION_TYPES.SET_TODO_LIST:
      return { ...state, todoList: newTodoList };
    default:
      return state;
  }
};

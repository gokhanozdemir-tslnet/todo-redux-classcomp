export const getTodoList = (state) => state.todoList;
export const getTodo = (state, id) =>
  state.todo.filter((todo) => todo.id === id);

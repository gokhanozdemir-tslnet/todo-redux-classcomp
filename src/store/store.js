import { createStore, compose, applyMiddleware } from "redux";
import logger from "redux-logger";
import { rootReducer } from "./root.reducer";

//STEP 1 CREATE ACTION TYPES
// const TODO_LIST_ACTION_TYPES = {
//   SET_TODO_LIST: "SET_TODO",
// };

//STEP 2 CREATE SUB REDUCERS
// const INITIAL_TODO_LIST_STATE = {
//   todoList: [],
// };

// const todoListReducer = (state = INITIAL_TODO_LIST_STATE, action = {}) => {
//   const { type, payload } = action;

//   switch (type) {
//     case TODO_LIST_ACTION_TYPES.SET_TODO_LIST:
//       return { ...state, todos: payload };
//     default:
//       return state;
//   }
// };

//STEP 3 BİND SUBREDUCER TO ROOTREDUCER

// const rootReducer = combineReducers({
//   todoList: todoListReducer,
// });

//STEP 4 CREATE STORE
const middleware = [logger];
const composedEnhancers = compose(applyMiddleware(...middleware));
// export const store = createStore(rootReducer, undefined, composedEnhancers);
export const store = createStore(rootReducer);

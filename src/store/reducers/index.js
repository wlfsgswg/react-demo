import { combineReducers } from "redux";
import todos from "./todo.js";
import visibilityFilter from "./visibilityFilter.js";
import mydemo from "./mydemo.js";

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  mydemo
});

export default todoApp;

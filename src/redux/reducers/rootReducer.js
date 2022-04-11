import { combineReducers } from "redux";
import { todoReducer } from "./todoReducer";
import { asyncReducer } from "./asyncReducer";

export const allReducers = combineReducers({
  toDo: todoReducer,
  customers: asyncReducer,
});

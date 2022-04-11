import { combineReducers } from "redux";
import { todoReducer } from "./todoReducer";

export const allReducers = combineReducers({ toDo: todoReducer });

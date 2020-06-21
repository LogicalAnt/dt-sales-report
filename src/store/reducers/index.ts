import { combineReducers } from "redux";
import { auth } from "./auth";
import { allSales } from "./sales";
export const rootReducer = combineReducers({ auth, allSales });

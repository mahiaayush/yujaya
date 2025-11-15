import { combineReducers } from "@reduxjs/toolkit";
import { getHomeReducer } from "./reducer/HomeReducer";

const rootReducer = combineReducers({
  getHomeContent: getHomeReducer,

});

export default rootReducer;
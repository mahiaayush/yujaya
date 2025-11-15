import { combineReducers } from "@reduxjs/toolkit";
import { getHomeReducer } from "./reducer/HomeReducer";
import { getFaqReducer } from "./reducer/FaqReducer";

const rootReducer = combineReducers({
  getHomeContent: getHomeReducer,
  getFaqContent: getFaqReducer,

});

export default rootReducer;
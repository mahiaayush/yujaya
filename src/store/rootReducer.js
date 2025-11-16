import { combineReducers } from "@reduxjs/toolkit";
import { getHomeReducer } from "./reducer/HomeReducer";
import { getFaqReducer } from "./reducer/FaqReducer";
import { getPrivacyContent } from "./action/PrivacyAction";
import { getPrivacyReducer } from "./reducer/PrivacyReducer";
import { getAboutUsReducer } from "./reducer/AboutUs";

const rootReducer = combineReducers({
  getHomeContent: getHomeReducer,
  getFaqContent: getFaqReducer,
  getPrivacyContent: getPrivacyReducer,
  getAboutUsContent: getAboutUsReducer
});

export default rootReducer;
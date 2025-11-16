import { combineReducers } from "@reduxjs/toolkit";
import { getHomeReducer } from "./reducer/HomeReducer";
import { getFaqReducer } from "./reducer/FaqReducer";
import { getPrivacyReducer } from "./reducer/PrivacyReducer";
import { getDisclaimerReducer, getTermCondReducer, getContactReducer, getCaseStudyReducer } from "./reducer/Reducer";
import { getCaseStudyDetailReducer } from "./reducer/CaseStudyReducer";
import { getAboutUsReducer } from "./reducer/AboutUs";

const rootReducer = combineReducers({
  getHomeContent: getHomeReducer,
  getFaqContent: getFaqReducer,
  getPrivacyContent: getPrivacyReducer,
  getTermCondContent: getTermCondReducer,
  getDisclaimerContent: getDisclaimerReducer,
  getContactContent: getContactReducer,
  getCaseStudyContent: getCaseStudyReducer,
  getCaseStudyDetailContent: getCaseStudyDetailReducer,
  getAboutUsContent: getAboutUsReducer
});

export default rootReducer;
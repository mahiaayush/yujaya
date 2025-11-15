import { useDispatch as useReduxDispatch, useSelector as useReduxSelector } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import rootReducer from "./rootReducer";
import.meta.env.VITE_API_URL
const store = configureStore({
  reducer: rootReducer,
  devTools: import.meta.env.VITE_REACT_APP_ENABLE_REDUX_DEV_TOOLS === "true"
});

// No TypeScript types here — JS only
export const useSelector = useReduxSelector;

export const useDispatch = () => useReduxDispatch();

export default store;

import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user";
import typeReducer from "./showType";

const store = configureStore({
  reducer: { user: userReducer, type: typeReducer },
});

export default store;

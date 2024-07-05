import { configureStore } from "@reduxjs/toolkit";
import todo from "./slices/todoSlice";
import contact from "./slices/contactSlice";

const store = configureStore({
  reducer: {
    todo,
    contact,
  },
});

export default store;

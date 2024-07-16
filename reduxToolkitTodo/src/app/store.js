/*process of making store

1.first of all , we have to configure STORE
*/

import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";
export const store = configureStore({
  reducer: todoReducer,
});

import { createSlice } from "@reduxjs/toolkit";
import { User } from "../../types/interfaces";

export const users = createSlice({
  name: "users",
  initialState: {
    user: <User>{},
  },
  reducers: {
    updateInfo: (_, action) => { return action.payload },
  }
})

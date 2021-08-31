import { createSlice } from "@reduxjs/toolkit";
const initialState = { userId: "" };

const userSlice = createSlice({
  name: "userSlice",
  initialState: initialState,
  reducers: {
    setUserId(state, action) {
      console.log("inside state", state, "actions", action.payload);
      state.userId = action.payload;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;

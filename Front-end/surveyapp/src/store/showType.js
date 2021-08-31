import { createSlice } from "@reduxjs/toolkit";

const initialState = { stateType: "" };

const typeSlice = createSlice({
  name: "typeSlice",
  initialState: initialState,
  reducers: {
    goToSurveyClicked(state) {
      state.stateType = "SurveyClicked";
    },
    proceedClicked(state) {
      state.stateType = "ProceedClicked";
    },
    finishClicked(state) {
      state.stateType = "FinishClicked";
    },
  },
});

export const typeActions = typeSlice.actions;
export default typeSlice.reducer;

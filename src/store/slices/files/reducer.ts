import { AnyAction } from "@reduxjs/toolkit";
import { FilesInitialState } from "./state";
import { RESET_SELECTION, UPDATE_SELECTED } from "./constants";
export const filesReducer = (state = FilesInitialState, action: AnyAction) => {
  let elements = [];

  switch (action.type) {
    case UPDATE_SELECTED:
      elements = [];
      for (let file of state.elements) {
        if (file.id === action.payload.fileId) {
          elements.push({ ...file, selected: true });
        } else {
          elements.push({ ...file, selected: false });
        }
      }
      return { ...state, elements };

    case RESET_SELECTION:
      elements = [];
      for (let file of state.elements) {
        elements.push({ ...file, selected: false });
      }
      return { ...state, elements };

    default:
      return state;
  }
};

import { RESET_SELECTION, UPDATE_SELECTED } from "./constants";

export const updateSelected = (fileId: number) => ({
  type: UPDATE_SELECTED,
  payload: { fileId },
});

export const resetSelection = () => ({
  type: RESET_SELECTION,
  payload: {},
});

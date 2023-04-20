import { RootState } from "../..";

export const selectFiles = (state: RootState) => state.files;
export const selectFileById = (state: RootState, fileId: number) =>
  state.files.elements.filter((el) => el.id === fileId)[0];

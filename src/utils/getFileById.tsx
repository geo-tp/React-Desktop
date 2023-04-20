import { FileType } from "../types";

export const getFileById = (files: FileType[], id: number) => {
  return files.filter((element) => element.id === id)[0];
};

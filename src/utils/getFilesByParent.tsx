import { FileType } from "../types";

export const getFileByParent = (files: FileType[], parent: string) => {
  return files.filter((file) => file.parent === parent);
};

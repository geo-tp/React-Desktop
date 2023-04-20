import { FileType } from "../types";

export const getFilesByName = (files: FileType[], keywords: string) => {
  return files.filter((file) => file.name.includes(keywords));
};

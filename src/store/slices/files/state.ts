import { files } from "../../../data/files";
import { FileType } from "./../../../types/index";

export const FilesInitialState = {
  elements: files as FileType[],
};

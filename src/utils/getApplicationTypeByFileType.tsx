import { FileTypeEnum, FrameAppTypeEnum } from "../types";

export const getApplicationTypeByFileType = (fileType: FileTypeEnum) => {
  switch (fileType) {
    case FileTypeEnum.Image:
      return FrameAppTypeEnum.ImageViewer;

    case FileTypeEnum.Firefox:
      return FrameAppTypeEnum.WebBrowser;

    case FileTypeEnum.Folder:
      return FrameAppTypeEnum.FileBrowser;

    default:
      return FrameAppTypeEnum.TextEditor;
  }
};

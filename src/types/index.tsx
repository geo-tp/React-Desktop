export enum FrameAppTypeEnum {
  FileBrowser,
  ImageViewer,
  TextEditor,
  CommandLine,
  WebBrowser,
}

export enum FrameViewStateEnum {
  Fullscreen,
  Custom,
}

export type FrameType = {
  id: number;
  type: FrameAppTypeEnum;
  fileId: number;
  hidden: boolean;
  width: string;
  height: string;
  top: number;
  left: number;
  zIndex: number;
  viewState: FrameViewStateEnum;
};

export enum FileTypeEnum {
  Image,
  Text,
  Firefox,
  Folder,
}

export type FileType = {
  id: number;
  name: string;
  type: FileTypeEnum;
  content: string;
  parent: string;
  selected: boolean;
};

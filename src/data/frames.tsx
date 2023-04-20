import { FrameType, FrameAppTypeEnum, FrameViewStateEnum } from "../types";

export const framesData: FrameType[] = [
  {
    id: 1,
    type: FrameAppTypeEnum.FileBrowser,
    fileId: 1,

    width: "1010px",
    height: "750px",
    top: 100,
    left: 280,

    zIndex: 1,
    hidden: false,
    viewState: FrameViewStateEnum.Custom,
  },
];

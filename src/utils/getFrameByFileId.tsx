import { FrameType } from "../types";

export const getFrameByFileId = (frames: FrameType[], fileId: number) => {
  for (let frame of frames) {
    if (frame.fileId === fileId) {
      return frame;
    }
  }

  return null;
};

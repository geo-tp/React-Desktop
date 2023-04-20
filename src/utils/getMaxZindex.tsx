import { FrameType } from "../types";

export const getMaxZindex = (frames: FrameType[]) => {
  let maxZ = 0;

  for (let frame of frames) {
    if (frame.zIndex > maxZ && !frame.hidden) {
      maxZ = frame.zIndex;
    }
  }

  return maxZ;
};

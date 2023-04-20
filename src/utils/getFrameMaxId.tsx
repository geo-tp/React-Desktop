import { FrameType } from "../types";

export const getFrameMaxId = (frames: FrameType[]) => {
  let maxId = 0;

  for (let frame of frames) {
    if (frame.id > maxId) {
      maxId = frame.id;
    }
  }

  return maxId;
};

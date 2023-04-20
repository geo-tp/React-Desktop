import { FileType, FrameViewStateEnum } from "../../../types";
import {
  ADD_FRAME,
  DELETE_FRAME,
  UPDATE_FRAME_VISIBILITY,
  UPDATE_HEIGHT,
  UPDATE_LEFT,
  UPDATE_TOP,
  UPDATE_VIEW_STATE,
  UPDATE_WIDTH,
  UPDATE_Z_INDEX,
} from "./constants";

export const deleteFrame = (frameId: number) => ({
  type: DELETE_FRAME,
  payload: { frameId },
});

export const addFrame = (file: FileType) => ({
  type: ADD_FRAME,
  payload: { file },
});

export const updateFrameVisiblity = (frameId: number) => ({
  type: UPDATE_FRAME_VISIBILITY,
  payload: { frameId },
});

export const updateZindex = (frameId: number) => ({
  type: UPDATE_Z_INDEX,
  payload: { frameId },
});

export const updateWidth = (frameId: number, newWidth: number) => ({
  type: UPDATE_WIDTH,
  payload: { frameId, width: newWidth },
});

export const updateHeight = (frameId: number, newHeight: number) => ({
  type: UPDATE_HEIGHT,
  payload: { frameId, height: newHeight },
});

export const updateTop = (frameId: number, newTop: number) => ({
  type: UPDATE_TOP,
  payload: { frameId, top: newTop },
});

export const updateLeft = (frameId: number, newLeft: number) => ({
  type: UPDATE_LEFT,
  payload: { frameId, left: newLeft },
});

export const updateViewState = (
  frameId: number,
  newState: FrameViewStateEnum
) => ({
  type: UPDATE_VIEW_STATE,
  payload: { frameId, viewState: newState },
});

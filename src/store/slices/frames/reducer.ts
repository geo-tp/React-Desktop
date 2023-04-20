import { AnyAction } from "@reduxjs/toolkit";
import { framesInitialState } from "./state";
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
import { FrameType, FrameViewStateEnum } from "../../../types";
import { getFrameMaxId } from "../../../utils/getFrameMaxId";
import { getApplicationTypeByFileType } from "../../../utils/getApplicationTypeByFileType";
import { getMaxZindex } from "../../../utils/getMaxZindex";

export const framesReducer = (
  state = framesInitialState,
  action: AnyAction
) => {
  let elements = [];

  switch (action.type) {
    case ADD_FRAME:
      const id = getFrameMaxId(state.elements) + 1;
      const zIndex = getMaxZindex(state.elements) + 1;
      const type = getApplicationTypeByFileType(action.payload.file.type);

      const newFrame: FrameType = {
        id,
        type,
        fileId: action.payload.file.id,
        zIndex,
        hidden: false,
        width: "100%",
        height: "100vh",
        top: 0,
        left: 0,
        viewState: FrameViewStateEnum.Fullscreen,
      };

      return {
        ...state,
        elements: [...state.elements, newFrame],
      };

    case DELETE_FRAME:
      elements = [];

      for (let element of state.elements) {
        if (element.id !== action.payload.frameId) {
          elements.push(element);
        }
      }

      return {
        ...state,
        elements: [...elements],
      };

    case UPDATE_FRAME_VISIBILITY:
      elements = [];
      for (let el of state.elements) {
        if (el.id === action.payload.frameId) {
          elements.push({ ...el, hidden: !el.hidden });
        } else {
          elements.push(el);
        }
      }

      return {
        ...state,
        elements,
      };

    case UPDATE_Z_INDEX:
      const maxZ = state.elements.length;
      const frame = state.elements.filter(
        (el) => el.id === action.payload.frameId
      )[0];

      if (!frame) {
        return state;
      }

      elements = [];
      for (let el of state.elements) {
        let newZ = el.zIndex;

        if (el.id === frame.id) {
          newZ = maxZ;
        }

        if (el.zIndex > frame.zIndex) {
          newZ = newZ - 1;
        }

        elements.push({ ...el, zIndex: newZ });
      }

      return { ...state, elements };

    case UPDATE_WIDTH:
      const newWidth = `${action.payload.width}%`;
      elements = [];

      for (let frame of state.elements) {
        if (frame.id === action.payload.frameId) {
          elements.push({ ...frame, width: newWidth });
        } else {
          elements.push({ ...frame });
        }
      }
      return { ...state, elements };

    case UPDATE_HEIGHT:
      const newHeight = `${action.payload.height}vh`;
      elements = [];

      for (let frame of state.elements) {
        if (frame.id === action.payload.frameId) {
          elements.push({ ...frame, height: newHeight });
        } else {
          elements.push({ ...frame });
        }
      }
      return { ...state, elements };

    case UPDATE_TOP:
      const newTop = action.payload.top;
      elements = [];

      for (let frame of state.elements) {
        if (frame.id === action.payload.frameId) {
          elements.push({ ...frame, top: newTop });
        } else {
          elements.push({ ...frame });
        }
      }
      return { ...state, elements };

    case UPDATE_LEFT:
      const newLeft = action.payload.left;
      elements = [];

      for (let frame of state.elements) {
        if (frame.id === action.payload.frameId) {
          elements.push({ ...frame, left: newLeft });
        } else {
          elements.push({ ...frame });
        }
      }
      return { ...state, elements };

    case UPDATE_VIEW_STATE:
      elements = [];
      for (let frame of state.elements) {
        if (frame.id === action.payload.frameId) {
          elements.push({ ...frame, viewState: action.payload.viewState });
        } else {
          elements.push({ ...frame });
        }
      }
      return { ...state, elements };

    default:
      return state;
  }
};

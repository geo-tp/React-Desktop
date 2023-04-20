import { useDispatch } from "react-redux";
import { HeaderButtonsStyle } from "./style";
import {
  deleteFrame,
  updateFrameVisiblity,
  updateHeight,
  updateViewState,
  updateWidth,
} from "../../store/slices/frames/actions";
import { FrameType, FrameViewStateEnum } from "../../types";

export const HeaderButtons = (props: { frame: FrameType }) => {
  const dispatch = useDispatch();

  const handleMaximize = () => {
    const frame = document.getElementById(`window-frame-${props.frame.id}`);

    if (props.frame.width !== "100%" && props.frame.height !== "100vh") {
      dispatch(updateWidth(props.frame.id, 100));
      dispatch(updateHeight(props.frame.id, 100));
      dispatch(updateViewState(props.frame.id, FrameViewStateEnum.Fullscreen));
      if (frame) {
        frame.style.transform = "translate(0,0)";
      }
    } else {
      dispatch(updateWidth(props.frame.id, 50));
      dispatch(updateHeight(props.frame.id, 80));
      dispatch(updateViewState(props.frame.id, FrameViewStateEnum.Custom));
    }
  };

  const handleClose = () => {
    dispatch(deleteFrame(props.frame.id));
  };

  return (
    <HeaderButtonsStyle>
      {/* Minimize */}
      <button onClick={() => dispatch(updateFrameVisiblity(props.frame.id))}>
        <div></div>
      </button>
      {/* Maximize */}
      <button onClick={() => handleMaximize()}>
        <div></div>
      </button>
      {/* Close */}
      <button onClick={() => handleClose()}>
        <div></div>
      </button>
    </HeaderButtonsStyle>
  );
};

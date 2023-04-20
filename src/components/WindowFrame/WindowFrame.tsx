import { ReactElement, useCallback, useState } from "react";
import { WindowFrameStyle } from "./style";
import Draggable from "react-draggable";
import { Header } from "./Header";
import { Body } from "./Body";
import { useDispatch, useSelector } from "react-redux";
import { selectOs } from "../../store/slices/os/selectors";
import { FrameType, FrameViewStateEnum } from "../../types";
import {
  updateHeight,
  updateLeft,
  updateTop,
  updateViewState,
  updateWidth,
  updateZindex,
} from "../../store/slices/frames/actions";
import { setIsDragDisable } from "../../store/slices/os/actions";
import useResizeObserver from "../../hooks/useResizeObserver";

export const WindowFrame = (props: {
  frame: FrameType;
  children: ReactElement;
}) => {
  const os = useSelector(selectOs);
  const dispatch = useDispatch();
  const [isDragging, setIsDragging] = useState(false);

  const handleResize = useCallback((target: HTMLDivElement) => {
    dispatch(setIsDragDisable(true));
    if (props.frame.viewState === FrameViewStateEnum.Fullscreen) {
      dispatch(updateViewState(props.frame.id, FrameViewStateEnum.Custom));
    }
  }, []);

  const frameRef = useResizeObserver(handleResize);

  const handleDrag = (e: any) => {
    if (props.frame.viewState === FrameViewStateEnum.Fullscreen) {
      dispatch(updateWidth(props.frame.id, 50));
      dispatch(updateHeight(props.frame.id, 50));
      dispatch(updateViewState(props.frame.id, FrameViewStateEnum.Custom));

      if (frameRef?.current) {
        const pos = frameRef.current.getBoundingClientRect();
        dispatch(updateLeft(props.frame.id, pos.x));
        dispatch(updateTop(props.frame.id, pos.y));
        frameRef.current.style.translate = `translate(${e.target.clientX}, ${e.target.clientY})`;
      }
    }
  };

  return (
    <Draggable
      defaultPosition={{ x: props.frame.left, y: props.frame.top }}
      onDrag={(e) => handleDrag(e)}
      disabled={os.isDragDisable}
      bounds="parent"
    >
      <WindowFrameStyle
        id={`window-frame-${props.frame.id}`}
        ref={frameRef}
        onClick={() => dispatch(updateZindex(props.frame.id))}
        style={{
          width: props.frame.width,
          height: props.frame.height,
          zIndex: props.frame.zIndex,
        }}
        close={props.frame.hidden}
        isDragging={isDragging}
      >
        <Header frame={props.frame} />
        <Body frame={props.frame}>{props.children}</Body>
      </WindowFrameStyle>
    </Draggable>
  );
};

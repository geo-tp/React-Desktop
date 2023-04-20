import Draggable from "react-draggable";
import { FileType } from "../../types";
import { Icon } from "./Icon";
import { FileSelectedStyle, FileStyle } from "./style";
import { useDispatch, useSelector } from "react-redux";
import {
  resetSelection,
  updateSelected,
} from "../../store/slices/files/actions";
import { getFrameByFileId } from "../../utils/getFrameByFileId";
import { selectFrames } from "../../store/slices/frames/selectors";
import {
  addFrame,
  updateFrameVisiblity,
  updateZindex,
} from "../../store/slices/frames/actions";

export const File = (props: { file: FileType; size?: string }) => {
  const iconSize = props.size === "big" ? 130 : 90;
  const frames = useSelector(selectFrames);
  const dispatch = useDispatch();

  const handleDoubleClick = () => {
    const frame = getFrameByFileId(frames.elements, props.file.id);
    if (frame) {
      dispatch(resetSelection());
      if (frame.hidden) {
        dispatch(updateFrameVisiblity(frame.id));
      }
      dispatch(updateZindex(frame.id));
    } else {
      dispatch(addFrame(props.file));
    }
  };

  const handleClick = () => {
    if (props.file.selected) {
      return;
    }

    dispatch(updateSelected(props.file.id));
  };

  const handleDrag = () => {
    if (props.file.selected) {
      return;
    }
    dispatch(updateSelected(props.file.id));
  };

  return (
    <Draggable onDrag={() => handleDrag()}>
      <FileStyle
        onDoubleClick={() => handleDoubleClick()}
        onClick={() => handleClick()}
      >
        {props.file.selected && <FileSelectedStyle />}
        <Icon size={`${iconSize}px`} file={props.file} />
        <span>{props.file.name}</span>
      </FileStyle>
    </Draggable>
  );
};

import { useDispatch, useSelector } from "react-redux";
import { FrameType } from "../../types";
import { WindowElementHighLightStyle, WindowElementStyle } from "./style";
import {
  updateFrameVisiblity,
  updateZindex,
} from "../../store/slices/frames/actions";
import { selectFrames } from "../../store/slices/frames/selectors";
import { FileTitle } from "../FileTitle";
import { getFileById } from "../../utils/getFileById";
import { selectFiles } from "../../store/slices/files/selectors";
import { getMaxZindex } from "../../utils/getMaxZindex";

export const WindowElement = (props: { element: FrameType }) => {
  const dispatch = useDispatch();
  const frames = useSelector(selectFrames);
  const files = useSelector(selectFiles);

  const handleClick = () => {
    const maxIndex = frames.elements.length;

    if (props.element.hidden) {
      dispatch(updateFrameVisiblity(props.element.id));
      dispatch(updateZindex(props.element.id));
    } else if (props.element.zIndex < maxIndex) {
      dispatch(updateZindex(props.element.id));
    } else if (props.element.zIndex === frames.elements.length) {
      dispatch(updateFrameVisiblity(props.element.id));
    }
  };

  return (
    <WindowElementStyle onClick={() => handleClick()}>
      {props.element.zIndex === getMaxZindex(frames.elements) && (
        <WindowElementHighLightStyle />
      )}
      <span>
        <FileTitle
          iconSize={14}
          file={getFileById(files.elements, props.element.fileId)}
        />
      </span>
    </WindowElementStyle>
  );
};

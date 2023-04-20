import { HeaderStyle } from "./style";
import { useDispatch, useSelector } from "react-redux";
import { updateZindex } from "../../store/slices/frames/actions";
import { FrameType } from "../../types";
import { HeaderButtons } from "./HeaderButtons";
import { FileTitle } from "../FileTitle";
import { selectFiles } from "../../store/slices/files/selectors";
import { getFileById } from "../../utils/getFileById";
import { setIsDragDisable } from "../../store/slices/os/actions";

export const Header = (props: { frame: FrameType }) => {
  const dispatch = useDispatch();
  const files = useSelector(selectFiles);

  return (
    <HeaderStyle
      onMouseLeave={() => dispatch(setIsDragDisable(true))}
      onMouseEnter={() => dispatch(setIsDragDisable(false))}
      onMouseDown={() => dispatch(updateZindex(props.frame.id))}
    >
      <FileTitle
        iconSize={14}
        file={getFileById(files.elements, props.frame.fileId)}
      />
      <HeaderButtons frame={props.frame} />
    </HeaderStyle>
  );
};

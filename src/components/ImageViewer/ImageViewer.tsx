import { FrameType } from "../../types";
import { getFileById } from "../../utils/getFileById";
import { ImageViewerStyle } from "./style";
import { useSelector } from "react-redux";
import { selectFiles } from "../../store/slices/files/selectors";

export const ImageViewer = (props: { frame: FrameType }) => {
  const files = useSelector(selectFiles);
  const file = getFileById(files.elements, props.frame.fileId);

  return (
    <ImageViewerStyle>
      <img src={file.content} alt={file.name} />
    </ImageViewerStyle>
  );
};

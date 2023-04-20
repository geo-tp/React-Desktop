import { useSelector } from "react-redux";
import { FrameType } from "../../types";
import { TextEditorStyle } from "./style";
import { selectFiles } from "../../store/slices/files/selectors";
import { getFileById } from "../../utils/getFileById";

export const TextEditor = (props: { frame: FrameType }) => {
  const files = useSelector(selectFiles);
  const file = getFileById(files.elements, props.frame.fileId);

  return (
    <TextEditorStyle>
      <div dangerouslySetInnerHTML={{ __html: file.content }}></div>
    </TextEditorStyle>
  );
};

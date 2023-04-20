import { FileType } from "../../types";
import { getIcon } from "../../utils/getIcons";
import { FileTitleStyle, TitleIconStyle } from "./style";

export const FileTitle = (props: { file: FileType; iconSize: number }) => {
  return (
    <FileTitleStyle>
      <TitleIconStyle>
        {" "}
        {getIcon(props.file, `${props.iconSize}px`)}
      </TitleIconStyle>
      <span>{props.file.name}</span>
    </FileTitleStyle>
  );
};

import { IconStyle } from "./style";
import { FileType } from "../../types";
import { getIcon } from "../../utils/getIcons";

export const Icon = (props: { file: FileType; size: string }) => {
  return <IconStyle>{getIcon(props.file, props.size)}</IconStyle>;
};

import { FileType } from "../../types";
import { File } from "../File";
import { FilesStyle } from "./style";

export const Files = (props: { files: FileType[] }) => {
  return (
    <FilesStyle>
      {props.files.map((file) => (
        <File key={`file-list-${file.name}-${file.id}`} file={file} />
      ))}
    </FilesStyle>
  );
};

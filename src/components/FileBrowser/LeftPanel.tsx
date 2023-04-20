import { FileType, FileTypeEnum } from "../../types";
import { FileTitle } from "../FileTitle";
import { LeftPanelStyle } from "./style";

export const LeftPanel = (props: { files: FileType[] }) => {
  return (
    <LeftPanelStyle>
      <h3>Recents</h3>
      <ul>
        {props.files.slice(0, 10).map((file) => (
          <li key={`recent-${file.name}-${file.id}`}>
            {file.type !== FileTypeEnum.Firefox &&
              file.type !== FileTypeEnum.Folder && (
                <FileTitle file={file} iconSize={20} />
              )}
          </li>
        ))}
      </ul>
      <h3>Shortcuts</h3>
      <ul>
        {props.files.map((file) => (
          <li key={`shortcut-${file.name}-${file.id}`}>
            {file.type === FileTypeEnum.Folder && (
              <FileTitle file={file} iconSize={25} />
            )}
          </li>
        ))}
      </ul>
    </LeftPanelStyle>
  );
};

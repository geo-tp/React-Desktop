import { useSelector } from "react-redux";
import { FilesStyle } from "./style";
import { selectFiles } from "../../store/slices/files/selectors";
import { useEffect, useState } from "react";
import { FileType } from "../../types";
import { File } from "../File";

export const Files = () => {
  const files = useSelector(selectFiles);

  const [desktopFiles, setDesktopFiles] = useState([] as FileType[]);

  useEffect(() => {
    setDesktopFiles(
      files.elements.filter((element) => element.parent === "Desktop")
    );
  }, [files.elements]);

  return (
    <FilesStyle>
      {desktopFiles?.map((element) => (
        <File
          key={`file-desktop-${element.name}-${element.id}`}
          file={element}
        />
      ))}
    </FilesStyle>
  );
};

import { useDispatch, useSelector } from "react-redux";
import { selectFiles } from "../../store/slices/files/selectors";
import { FrameType } from "../../types";
import { getFileById } from "../../utils/getFileById";
import { FileBrowserStyle, RightPanelStyle } from "./style";
import { getFileByParent } from "../../utils/getFilesByParent";
import { LeftPanel } from "./LeftPanel";
import { Files } from "./Files";
import { Tools } from "./Tools";
import { resetSelection } from "../../store/slices/files/actions";
import { useEffect, useState } from "react";
import { getFilesByName } from "../../utils/getFilesByName";

export const FileBrowser = (props: { frame: FrameType }) => {
  const dispatch = useDispatch();
  const files = useSelector(selectFiles);
  const file = getFileById(files.elements, props.frame.fileId);
  const [folderFiles, setFolderFiles] = useState(
    getFileByParent(files.elements, file.name)
  );
  const [filteredFiles, setFilteredFiles] = useState(folderFiles);
  const [keywords, setKeywords] = useState("");

  useEffect(() => {
    setFolderFiles(getFileByParent(files.elements, file.name));
  }, [files.elements, file.name]);

  useEffect(() => {
    setFilteredFiles(getFilesByName(folderFiles, keywords));
  }, [folderFiles, keywords]);

  const handleSearchChange = (e: any) => {
    const newValue = e.target.value;
    setKeywords(newValue);
  };

  const handleClick = (e: any) => {
    if (e.target.tagName !== "IMG") {
      dispatch(resetSelection());
    }
  };

  return (
    <FileBrowserStyle onClick={(e) => handleClick(e)}>
      <LeftPanel files={files.elements} />
      <RightPanelStyle>
        <Tools onSearchChange={handleSearchChange} />
        <Files files={filteredFiles} />
      </RightPanelStyle>
    </FileBrowserStyle>
  );
};

import { FileType, FileTypeEnum } from "../types";
import Home from "../assets/icons/home.webp";
import Firefox from "../assets/icons/firefox.webp";
import File from "../assets/icons/file.webp";
import Folder from "../assets/icons/folder.webp";

export const getIcon = (file: FileType, size: string) => {
  let icon = "";

  switch (file.type) {
    case FileTypeEnum.Firefox:
      icon = Firefox;
      break;
    case FileTypeEnum.Image:
      icon = file.content;
      break;

    case FileTypeEnum.Folder:
      if (file.name === "Home") {
        icon = Home;
      } else {
        icon = Folder;
      }
      break;

    default:
      icon = File;
  }

  return (
    <img src={icon} alt="file" draggable={false} style={{ width: size }} />
  );
};

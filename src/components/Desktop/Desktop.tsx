import { DesktopStyle } from "./style";
import { Frames } from "./Frames";
import { Files } from "./Files";
import { ImageBackground } from "./ImageBackground";

export const Desktop = () => {
  return (
    <DesktopStyle>
      <ImageBackground />
      <Frames />
      <Files />
    </DesktopStyle>
  );
};

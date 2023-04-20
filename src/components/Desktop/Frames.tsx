import { useSelector } from "react-redux";
import { selectFrames } from "../../store/slices/frames/selectors";
import { WindowFrame } from "../WindowFrame";
import { FrameAppTypeEnum } from "../../types";
import { FramesStyle } from "./style";
import { ImageViewer } from "../ImageViewer";
import { TextEditor } from "../TextEditor";
import { FileBrowser } from "../FileBrowser";
import { WebBrowser } from "../WebBrowser";

export const Frames = () => {
  const frames = useSelector(selectFrames);

  return (
    <FramesStyle>
      {frames?.elements?.length &&
        frames?.elements?.map((frame) => (
          <WindowFrame key={`frame-id-${frame.id}`} frame={frame}>
            <div>
              {frame.type === FrameAppTypeEnum.TextEditor && (
                <TextEditor frame={frame} />
              )}

              {frame.type === FrameAppTypeEnum.ImageViewer && (
                <ImageViewer frame={frame} />
              )}

              {frame.type === FrameAppTypeEnum.FileBrowser && (
                <FileBrowser frame={frame} />
              )}

              {frame.type === FrameAppTypeEnum.WebBrowser && (
                <WebBrowser frame={frame} />
              )}
            </div>
          </WindowFrame>
        ))}
    </FramesStyle>
  );
};

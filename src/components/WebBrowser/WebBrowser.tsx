import { FrameType } from "../../types";
import { WebBrowserStyle } from "./style";

export const WebBrowser = (props: { frame: FrameType }) => {
  return (
    <WebBrowserStyle>
      <embed src="https://archive.thealphaproject.eu" type="" />
    </WebBrowserStyle>
  );
};

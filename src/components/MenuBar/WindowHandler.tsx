import { useSelector } from "react-redux";
import { WindowHandlerStyle } from "./style";
import { selectFrames } from "../../store/slices/frames/selectors";
import { WindowElement } from "./WindowElement";

export const WindowHandler = () => {
  const frames = useSelector(selectFrames);

  return (
    <WindowHandlerStyle>
      {frames.elements &&
        frames.elements.map((frame) => (
          <WindowElement key={`menu-frame-${frame.id}`} element={frame} />
        ))}
    </WindowHandlerStyle>
  );
};

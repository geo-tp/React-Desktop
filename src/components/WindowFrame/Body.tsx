import { ReactElement } from "react";
import { BodyStyle } from "./style";
import { useDispatch } from "react-redux";

import { FrameType } from "../../types";
import { updateZindex } from "../../store/slices/frames/actions";

export const Body = (props: { children: ReactElement; frame: FrameType }) => {
  const dispatch = useDispatch();

  return (
    <BodyStyle onMouseDown={() => dispatch(updateZindex(props.frame.id))}>
      {props.children}
    </BodyStyle>
  );
};

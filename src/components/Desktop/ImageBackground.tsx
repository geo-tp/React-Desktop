import { ImageBackgroundStyle } from "./style";
import BGHD from "../../assets/background-hd2.webp";
import { useDispatch } from "react-redux";
import { resetSelection } from "../../store/slices/files/actions";

export const ImageBackground = () => {
  const dispatch = useDispatch();

  return (
    <ImageBackgroundStyle
      draggable={false}
      onClick={() => dispatch(resetSelection())}
      src={BGHD}
    />
  );
};

import { useDispatch, useSelector } from "react-redux";
import { StartButtonStyle } from "./style";
import { setIsMenuOpen } from "../../store/slices/os/actions";
import { selectOs } from "../../store/slices/os/selectors";
import Logo from "../../assets/logo3.webp";

export const StartButton = () => {
  const dispatch = useDispatch();
  const os = useSelector(selectOs);

  return (
    <StartButtonStyle onClick={() => dispatch(setIsMenuOpen(!os.isMenuOpen))}>
      <img src={Logo} alt="a styled wrapped O and S" />
    </StartButtonStyle>
  );
};

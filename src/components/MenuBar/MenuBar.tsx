import { useDispatch } from "react-redux";
import { MenuDropDown } from "./MenuDropDown";
import { StartButton } from "./StartButton";
import { WindowHandler } from "./WindowHandler";
import { MenuBarStyle } from "./style";
import { Separator } from "./Separator";
import { Clock } from "./Clock";
import { SearchBar } from "../SearchBar";
import { setIsMenuOpen } from "../../store/slices/os/actions";

export const MenuBar = () => {
  const dispatch = useDispatch();

  return (
    <MenuBarStyle>
      <StartButton />
      <SearchBar
        onChange={() => {}}
        onFocus={() => dispatch(setIsMenuOpen(true))}
      />
      <Separator />
      <WindowHandler />
      <MenuDropDown />
      <Clock />
    </MenuBarStyle>
  );
};

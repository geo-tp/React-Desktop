import { useRef } from "react";
import { MenuDropDownStyle, ShortcutBoxStyle } from "./style";
import { useOutsideBox } from "../../hooks/useOutsideBox";
import { useDispatch, useSelector } from "react-redux";
import { setIsMenuOpen } from "../../store/slices/os/actions";

import Home from "../../assets/icons/home.webp";
import Firefox from "../../assets/icons/firefox.webp";
import User from "../../assets/icons/user.webp";
import Settings from "../../assets/icons/settings.webp";
import File from "../../assets/icons/file.webp";

import { selectFiles } from "../../store/slices/files/selectors";
import { ShortCut } from "./ShortCut";
import { selectOs } from "../../store/slices/os/selectors";

export const MenuDropDown = () => {
  const dropDownRef = useRef<HTMLDivElement>(null);
  const dispatch = useDispatch();
  const os = useSelector(selectOs);

  const files = useSelector(selectFiles);

  useOutsideBox(dropDownRef, () => dispatch(setIsMenuOpen(false)));

  return (
    <MenuDropDownStyle open={os.isMenuOpen} ref={dropDownRef}>
      <ShortcutBoxStyle>
        <ShortCut name="Home" src={Home} alt="Home"></ShortCut>
        <ShortCut name="Firefox" src={Firefox} alt="Web Browser"></ShortCut>
      </ShortcutBoxStyle>

      <ShortcutBoxStyle>
        <ShortCut name="User" src={User} alt="Home"></ShortCut>
        <ShortCut name="Settings" src={Settings} alt="Web Browser"></ShortCut>
      </ShortcutBoxStyle>

      <ShortcutBoxStyle>
        <ShortCut name="notes.txt" src={File} alt="note file"></ShortCut>
        <ShortCut
          name="image.jpg"
          src={files.elements[4].content}
          alt="Web Browser"
        ></ShortCut>
      </ShortcutBoxStyle>
    </MenuDropDownStyle>
  );
};

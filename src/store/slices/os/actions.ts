import { SET_IS_DRAG_DISABLE, SET_IS_MENU_OPEN } from "./constants";

export const setIsDragDisable = (status: boolean) => ({
  type: SET_IS_DRAG_DISABLE,
  payload: { status },
});

export const setIsMenuOpen = (status: boolean) => ({
  type: SET_IS_MENU_OPEN,
  payload: { status },
});

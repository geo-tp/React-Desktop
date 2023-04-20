import { useEffect } from "react";

export function useOutsideBox(ref: any, closeBox: Function) {
  /**
   * Close element if mouse click outside
   */
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (!ref?.current) {
        return;
      }

      if (
        ref.current &&
        !ref.current.contains(event.target) &&
        event.target.tagName !== "INPUT" &&
        event.target.parentNode.tagName !== "BUTTON"
      ) {
        closeBox();
      }
    }

    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, closeBox]);
}

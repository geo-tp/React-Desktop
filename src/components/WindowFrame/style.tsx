import styled from "styled-components";
import { mediumShadow } from "../../style/mixins";

export const WindowFrameStyle = styled.div<{
  close: boolean;
  isDragging: boolean;
}>`
  z-index: 11;
  position: absolute;
  /* background-color: ${(props) => props.theme.colorBG3}; */
  resize: both;
  overflow: hidden;
  border-radius: 10px 10px 0px 0px;
  ${mediumShadow}
  background-color: ${(props) => props.theme.colorBG10};
  border: 1px solid ${(props) => props.theme.colorBG2};
  max-width: 100vw;
  min-width: 400px;
  max-height: calc(100% - 39px);
  min-height: 300px;
  transition: width 50ms, height 50ms;
  animation: ${(props) =>
    props.close ? "frame-disappear 1s ease" : "frame-appear 300ms ease"};
  /* hack to make it work, forwards need to be re set */
  animation-fill-mode: ${(props) => (props.close ? "forwards" : "forwards")};

  @keyframes frame-disappear {
    0% {
      opacity: 1;
    }

    50% {
      transform: translateY(1000px) scale(0.5);
      opacity: 0.5;
    }

    100% {
      transform: translateY(2000px) scale(0);
      opacity: 0;
    }
  }

  @keyframes frame-appear {
    0% {
      transform: translateY(2000px) scale(0);
      opacity: 0;
    }

    50% {
      transform: translateY(1000px) scale(0.5);
      opacity: 0.5;
    }
    0% {
      opacity: 1;
    }
  }
`;

export const HeaderStyle = styled.div`
  /* padding: 10px; */
  height: 28px;
  z-index: 10;
  background-color: ${(props) => props.theme.colorBG4};

  border: 1px solid ${(props) => props.theme.colorBG2};
  color: ${(props) => props.theme.colorFont1};
  width: 100%;
  /* height: 20px; */
  display: flex;
  align-items: center;
  font-size: 0.85em;
  border-radius: 10px 10px 0px 0px;
  justify-content: space-between;

  & img {
    margin-left: 6px;
  }

  &:-moz-window-dragging {
    cursor: move;
  }
`;

export const HeaderButtonsStyle = styled.div`
  display: flex;
  padding-right: 5px;

  & button {
    background-color: transparent;
    border: unset;
    width: 20px;
    padding: 5px;
    margin-right: 5px;
    cursor: pointer;

    & div {
      width: 14px;
      height: 14px;
      border-radius: 100%;
      border: unset;
    }
  }

  & button:nth-child(1) {
    & div {
      background-color: ${(props) => props.theme.colorAlt1};
    }
  }

  & button:nth-child(2) {
    & div {
      background-color: ${(props) => props.theme.colorAlt3};
    }
  }

  & button:nth-child(3) {
    & div {
      background-color: ${(props) => props.theme.colorAlt2};
    }
  }
`;

export const BodyStyle = styled.div`
  & p {
    margin: 0px;
    color: ${(props) => props.theme.colorFont1};
    height: 100%;
    /* width: 100%; */
  }

  & img {
    /* width: 100%; */
    height: 100%;
    object-fit: contain;
  }
`;

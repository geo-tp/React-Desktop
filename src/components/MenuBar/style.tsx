import styled from "styled-components";
import { mediumShadow } from "../../style/mixins";

export const MenuBarStyle = styled.div`
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 35px;
  display: flex;
  border: 1px solid ${(props) => props.theme.colorBG2};
  background-color: ${(props) => props.theme.colorBG4};
  z-index: 100;
`;

export const MenuDropDownStyle = styled.div<{ open: boolean }>`
  position: fixed;
  bottom: 39px;
  height: 295px;
  width: 210px;
  z-index: 90;
  border-radius: 0px 20px 0px 0px;
  border: 1px solid ${(props) => props.theme.colorBG2};
  background-color: ${(props) => props.theme.colorBG4};
  color: ${(props) => props.theme.colorFont1};
  padding: 10px;
  cursor: default;
  ${mediumShadow}

  & h3 {
    margin: 0px;
    padding: 0;
  }
  animation: ${(props) =>
    props.open ? "menu-appear 200ms ease" : "menu-disappear 300ms ease"};
  animation-fill-mode: ${(props) => (props.open ? "forwards" : "forwards")};

  @keyframes menu-disappear {
    0% {
      opacity: 1;
    }

    50% {
      transform: translateY(100px) translateX(-200px) scale(0.5);
      opacity: 0.5;
    }

    100% {
      transform: translateY(5000px) scale(0);
      opacity: 0;
      visibility: hidden;
    }
  }

  @keyframes menu-appear {
    0% {
      transform: translateY(100px) scale(0);
      opacity: 0;
    }

    50% {
      transform: translateY(100px) translateX(-200px) scale(0.5);
      opacity: 0.5;
    }

    100% {
      opacity: 1;
      visibility: visible;
    }
  }
`;

export const StartButtonStyle = styled.button`
  background-color: unset;
  border: none;
  padding: 0px 15px;

  & img {
    width: 26px;
    height: 26px;
  }
`;

export const WindowHandlerStyle = styled.div`
  display: flex;
  align-items: center;
  width: calc(100% - 310px);
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const WindowElementStyle = styled.div`
  width: 150px;
  height: 23px;
  font-size: 0.8em;
  color: ${(props) => props.theme.colorFont1};
  background-color: ${(props) => props.theme.colorBG8};
  display: flex;
  align-items: center;
  padding: 0px 5px;
  margin-right: 6px;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.colorBG8};
  position: relative;
  /* &--highlight {
    background-color: ${(props) => props.theme.colorBG7};
  } */
`;

export const WindowElementHighLightStyle = styled.div`
  position: absolute;
  width: 101%;
  height: 100%;
  left: -1px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.colorBG7};
  animation: appear 300ms ease;

  @keyframes appear {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;

export const SeparatorStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-right: 10px;

  & div {
    background-color: ${(props) => props.theme.colorBG9};
    width: 4px;
    height: 4px;
    border-radius: 100%;
    margin: 2px;
  }
`;

export const ClockStyle = styled.div`
  background-color: ${(props) => props.theme.colorBG8};
  display: flex;
  align-items: center;
  /* height: 28px; */
  justify-content: center;
  position: absolute;
  top: 7px;
  font-size: 0.8em;
  padding: 4px 6px;
  border-radius: 10px;
  right: 5px;
  border: 1px solid ${(props) => props.theme.colorBG8};

  & i {
    color: ${(props) => props.theme.colorAlt4};
    padding-right: 4px;
  }

  & span {
    color: ${(props) => props.theme.colorFont1};
  }
`;

export const ShortCutStyle = styled.div`
  color: ${(props) => props.theme.colorFont1};
  display: flex;
  align-items: center;
  /* font-size: 1.3em; */
  padding: 5px;
  padding-left: 15px;
  margin: 5px 0px;
  position: relative;
  padding-bottom: 10px;
  border-bottom: 1px solid ${(props) => props.theme.colorBG8};
  transition: all 300ms;

  &:hover {
    color: ${(props) => props.theme.colorFont2};
  }

  & i {
    position: absolute;
    right: 10px;
    color: ${(props) => props.theme.colorFont2};
  }

  & img {
    width: 20px;
    margin-right: 7px;
  }
`;

export const ShortcutBoxStyle = styled.div`
  background-color: ${(props) => props.theme.colorBG8};
  border-radius: 10px;
  margin-bottom: 15px;
  border: 1px solid ${(props) => props.theme.colorBG8};

  & div:last-child {
    border: unset;
  }
`;

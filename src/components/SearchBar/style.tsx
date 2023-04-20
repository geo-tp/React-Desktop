import styled from "styled-components";

export const SearchBarStyle = styled.div`
  background-color: unset;
  border: none;
  padding-right: 10px;
  position: relative;
  display: flex;
  align-items: center;

  & label {
    display: none;
  }

  & i {
    position: absolute;
    /* top: 10px; */
    left: 7px;
    font-size: 0.8em;
    color: ${(props) => props.theme.colorFont4};
  }

  & input {
    background-color: ${(props) => props.theme.colorBG8};
    color: ${(props) => props.theme.colorFont1};
    border: 1px solid ${(props) => props.theme.colorBG8};
    border-radius: 30px;
    height: 23px;
    max-width: 120px;
    font-size: 0.9em;
    padding-left: 25px;
    padding-right: 10px;
    transition: all 400ms;

    &:focus {
      outline: none;
      background-color: ${(props) => props.theme.colorBG9};
      border: 1px solid ${(props) => props.theme.colorBG8};
    }
  }
`;

import styled from "styled-components";

export const FileBrowserStyle = styled.div`
  display: flex;
  height: 100vh;
`;
export const LeftPanelStyle = styled.div`
  background-color: ${(props) => props.theme.colorBG5};
  flex-basis: 30%;
  min-width: 240px;
  max-width: 300px;
  border-right: 1px solid ${(props) => props.theme.colorBG4};
  resize: horizontal;

  & h3 {
    color: ${(props) => props.theme.colorFont1};
    margin-left: 15px;
    margin-bottom: 5px;
  }

  & ul {
    color: ${(props) => props.theme.colorFont1};
    list-style: none;

    & li {
      margin-bottom: 8px;
    }
  }
`;
export const RightPanelStyle = styled.div`
  /* background-color: ${(props) => props.theme.colorBG3}; */
  padding: 20px;
  padding-top: 0px;
  flex-basis: 100%;
`;

export const FilesStyle = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ToolsStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  margin-bottom: 30px;

  & i {
    color: ${(props) => props.theme.colorFont2};
    margin-right: 10px;
    cursor: pointer;
  }

  & div {
    color: ${(props) => props.theme.colorFont2};
  }
`;

export const FileBrowserElementsStyle = styled.div``;

export const PathStyle = styled.div`
  background-color: ${(props) => props.theme.colorBG5};
  color: ${(props) => props.theme.colorFont1};
  border: 1px solid ${(props) => props.theme.colorBG8};
  width: 100%;
  border-radius: 10px;
  display: flex;
  align-items: center;
  margin: 20px;
  padding: 4px;

  & i {
    margin-right: 10px;
    margin-left: 10px;
  }
`;

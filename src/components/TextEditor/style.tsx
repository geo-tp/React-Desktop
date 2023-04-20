import styled from "styled-components";

export const TextEditorStyle = styled.div`
  padding: 20px;
  overflow: scroll;
  max-height: calc(100vh - 90px);

  &::-webkit-scrollbar {
    display: none;
  }

  & div {
    padding-bottom: 60px;
    max-width: 1200px;
    color: ${(props) => props.theme.colorFont1};
  }
`;

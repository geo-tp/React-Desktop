import styled from "styled-components";

export const IconStyle = styled.div`
  & img {
    border-radius: 5px;
  }
`;

export const FileStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* z-index: 1; */
  color: ${(props) => props.theme.colorFont1};
  font-size: 0.9em;
  margin-bottom: 40px;
  position: relative;
  padding: 5px;
  margin-right: 22px;
  width: 140px;

  & span {
    margin-top: 8px;
  }
`;

export const FileSelectedStyle = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.3;
  background-color: ${(props) => props.theme.colorAlt4};
  border-radius: 5px;
`;

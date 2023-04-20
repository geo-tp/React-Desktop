import styled from "styled-components";

export const ImageViewerStyle = styled.div`
  max-height: calc(100% - 60px);
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  & img {
    object-fit: contain;
    width: 100%;
    height: 100%;
    max-height: calc(100vh - 70px);
  }
`;

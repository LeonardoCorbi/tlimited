import styled from 'styled-components';

export const Container = styled.div`
  grid-area: ad;
  position: relative;
  height: 100px;
  margin-top: 20px;

  img {
    width: 99vw;
    position: absolute;
    left: -38px;
    z-index: 8;
    max-height: 650px;
  }
`;

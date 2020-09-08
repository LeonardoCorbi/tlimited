import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 38px;

  grid-area: recommend;

  margin-top: 50rem;

  p {
    font-size: 2.4rem;
    margin-bottom: 30px;
  }

  span {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    
  }
`;

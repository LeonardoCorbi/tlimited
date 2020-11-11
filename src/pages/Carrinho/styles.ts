import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 38px;
  margin-top: 144px;

`;
export const BreadCrumbs = styled.div`
  width: 100%;
  height: 80px;

  display: flex;
  flex-direction: row;

  border: 2px solid black;

  span {
    max-width: calc(100% / 3);
    width: 100%;

    font-size: 24px;

    display: flex;
    justify-content: center;
    align-items: center;

    
    &:first-child {
      background: var(--green);
    }

    &:nth-child(2) {
      border-left: 2px solid black;
      border-right: 2px solid black;
    }
  }
`

export const ItensContainer = styled.div`

`

export const UserActions = styled.div`

`

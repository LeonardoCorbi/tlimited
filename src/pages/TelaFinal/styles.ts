import styled from 'styled-components';

export const Container = styled.div`
  padding: 0 38px;
  margin-top: 144px;

  font-size: 24px;
  height: 80px;

  .title {
    color: var(--green);
    font-size: 36px;
  }
  
  div {
    position: absolute;
    top: 500px;
    left: 50vw;

    transform: translate(-50%, -50%);

    border: 2px solid black;

    text-align: center;

    width: 500px;
    height: fit-content;

    padding: 16px;

    display: flex;
    flex-direction: column;

    button {
      margin-top: 16px;

      height: 70px;
      width: 100%;

      background: var(--green);

      border: 2px solid black;

      font-size: 36px;

      cursor: pointer;
    }
  }
`
import styled from 'styled-components';

export const Container = styled.div`

`

export const Content = styled.main`
  margin-top: 144px;
  
  width: 100vw;
  height: calc(100vh - 144px);

  display: flex;
  justify-content: center;
  align-items: center;

  > h1 {
    position: absolute;
    top: 144px;
    left: 37px;
    color: var(--green);
    font-size: 3.6rem;
  }

  form {
    display: flex;
    flex-direction: column;

    padding: 12px 24px;
    
    width: 27%;
    height: 617px;

    border: 2px solid black;

    p, label {
      font-size: 2.4rem;
    }

    label {
      margin-top: 24px;
    }

    input {
      margin-top: 8px;
      height: 70px;
      font-size: 2.4rem;
      padding: 0 16px;
    }

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      
      margin-top: 33px;
      
      font-size: 3.6rem;
      
      background: var(--green);
      border: 2px solid black;

      padding-top: 8px;
    }

    span {
      margin-top: 33px;

      font-size: 2.4rem;

    }

    h2 {
      display: flex;
      justify-content: center;
      align-items: center;
      
      margin-top: 7px;
      
      font-size: 3.6rem;
      
      border: 2px solid black;

      padding-top: 8px;
    }

  }
`
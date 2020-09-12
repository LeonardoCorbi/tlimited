import styled from 'styled-components';

export const Container = styled.main`
`


export const Content = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 144px;
  height: calc(100vh - 144px);

  h1 {
    position: absolute;
    top: 144px;
    left: 37px;

    font-size: 3.6rem;
    color: var(--green);
  }

  form {
    border: 2px solid black;

    padding: 33px 24px;

    font-size: 2.4rem;

    width: 70%;
    height: 545px;

    div {
      display: flex;
    }
  }
`

export const Column1 = styled.span`
  display: flex;
  flex-direction: column;

  width: 27%;

  margin-left: 1%;

  label {
    margin-top: 16px;
  }
  
  input {
    height: 56px;

    font-size: 2.4rem;
    padding: 0 10px;
  }
`

export const Column2 = styled.span`
  display: flex;
  flex-direction: column;

  width: 27%;
  max-width: 344px;

  margin: 0 7.8%;
  
  input {
    height: 56px;

    font-size: 2.4rem;
    padding: 0 10px;
  }

  label {
    margin-top: 16px;
  }

  span {
    display: flex;
    justify-content: space-between;

    width: 100%;

    div {
      display: flex;
      flex-direction: column;

      input {
        width: 70%;
      }

      select {
        appearance: none;
        -moz-appearance: none;
        -webkit-appearance: none;

        border: 2px solid black;
        background: white;

        font-size: 2.4rem;

        width: 160px;
        height: 56px;

        padding: 0 10px;

        position: relative;

      }
    }
  }

  select {
    appearance: none;
    -moz-appearance: none;
    -webkit-appearance: none;

    border: 2px solid black;
    background: white;

    font-size: 2.4rem;

    height: 56px;

    padding: 0 10px;
  }
`

export const Column3 = styled.span`
  display: flex;
  flex-direction: column;

  width: 27%;
  
  input {
    height: 56px;
  }

  label {
    margin-top: 16px;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    
    font-size: 3.6rem;

    height: 56px;

    background: var(--green);
    border: 2px solid black;

    padding-top: 8px;
  }

  .avatar {
    border: none;
    display: flex;
  }

  .avatar::-webkit-file-upload-button {
    border: 2px solid black;
    border-radius: 0;

    font-family: industry-inc-base;

    height: 56px;

    background: var(--green);

    font-size: 1.6rem;

    &:defined {
      background: red;
    }
  }
`

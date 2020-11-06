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

    &::-webkit-inner-spin-button { 
    -webkit-appearance: none;
    }

    & { 
      -moz-appearance: textfield;
      appearance: textfield;
    }
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

      position: relative;

      input {
        width: 70%;
      }

      select {
        appearance: none;
        -moz-appearance: none;
        -webkit-appearance: none;

        border: 2px solid black;
        background: transparent;

        font-size: 2.4rem;

        width: 160px;
        height: 56px;

        padding: 0 10px;

        position: relative;
      }

      p {
        position: absolute;
        right: 8px;
        bottom: 8px;

        z-index: -10;
      }
    }
  }

  div {
    display: flex;
    flex-direction: column;

    position: relative;

    select {
      appearance: none;
      -moz-appearance: none;
      -webkit-appearance: none;

      border: 2px solid black;
      background: transparent;

      font-size: 2.4rem;

      height: 56px;

      padding: 0 10px;
    }

    p {
      position: absolute;
      bottom: 8px;
      right: 8px;

      z-index: -10;
    }
  }
`

export const Column3 = styled.span`
  display: flex;
  flex-direction: column;

  width: 27%;

  margin-top: 16px;
  div {
    display: flex;
    flex-direction: row;

    margin-top: 38px;
    margin-bottom: 29px;
    
    .imgContainer {
      width: 170px;
      height: 170px;
      position: relative;
    
      &::before {
        height: 170px;
        width: 170px;
        content: '';
        position: absolute;
        z-index: -5;
        border: 2px solid var(--green);
        top: 13px;
        right: 13px;
        bottom: -13px;
        left: -13px;
      }
    }

    span + span{
      display: flex;
      flex-direction: column;

      margin-left: 30px;
      input[type='file'] {
        display: none;
      }
    }
  }


  img {
    width: 170px;
    height: 170px;
    position: relative;

  }
  
  input {
    height: 56px;
  }

  .avatarbtn {
    width: 176px;
    height: 80px;

    text-align: center;
    font-size: 24px;

    border: 2px solid black;

    margin-top: 16px;
    
    cursor: pointer;

    display: flex;
    justify-content: center;
    align-items: center;
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

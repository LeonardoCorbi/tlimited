import styled from 'styled-components';
import { FaArrowRight } from 'react-icons/fa'

export const Container = styled.div`
  padding: 0 38px;
  margin-top: 144px;

  font-size: 24px;
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

    display: flex;
    justify-content: center;
    align-items: center;

    
    &:last-child {
      background: var(--green);
    }

    &:nth-child(2) {
      border-left: 2px solid black;
      border-right: 2px solid black;
    }
  }
`

export const MainView = styled.article`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`

export const Product = styled.div`
  width: 100%;
  max-height: 178px;

  border: 2px solid black;

  margin-bottom: 16px;

  display: flex;

  font-size: 16px;

  span {

    &:first-child {
      display: flex;
      justify-content: center;
      align-items: center;

      .imgWrapper {
        height: fit-content;
      }

      img {
        width: 190px;
        height: auto;
      }
    }

    &:last-child {
      span {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        line-height: 24px;
        margin-left: 16px;
      }
    }
  }

`

export const Content1 = styled.div`
  width: 100%;
  height: 50px;

  border: 2px solid black;

  padding: 16px;

  display: flex;
  flex-direction: column;

  height: fit-content;

  div {
    height: calc(3 * 178px);

    overflow: auto;
  }

  span {
    display: flex;
    justify-content: space-between;


    p {
      padding-top: 16px;
      font-size: 36px;
      
      &:first-child {
        color: var(--green);
      }
    }
  }
`
export const Content2 = styled.div`
  width: 100%;
  height: fit-content;

  border: 2px solid black;

  padding: 16px;

  display: flex;
  flex-direction: column;

  div {
    &:nth-child(2) {
      margin-top: 16px;
    }

    &:nth-child(3) {
      margin-top: 16px;
    }

    &:nth-child(4) {
      margin-top: 16px;
    }
  }


  p {
    color: var(--green);
  }

  .avatarContainer {
    display: flex;
    flex-direction: row;

    margin-left: 10px;

    span {
      margin-left: 16px;
    }
  }

  .avatarWrapper {
    max-width: 100px;
    max-height: 100px;

    position: relative;

    &::before {
      content: '';

      z-index: -10;

      position: absolute;

      top: 10px;
      right: 10px;
      bottom: -10px;
      left: -10px;

      border: 2px solid var(--green);
    }

    img {
      width: 100px;
      height: 100px;
      
      object-fit: contain;
    }
  }
`

export const Content3 = styled.div`
  width: 100%;
  height: fit-content;

  border: 2px solid black;

  padding: 16px;

  display: flex;
  flex-direction: column;

  p {
    color: var(--green);
  }

  input {
    width: 100%;

    border: 2px solid black;

    height: 70px;

    font-size: 24px;
  }

  button {
    height: 70px;
    width: 100%;

    background: var(--green);

    border: 2px solid black;

    font-size: 36px;

    margin-top: 24px;

    cursor: pointer;
  }

  div {
    &:nth-child(3) {
      margin-top: 16px;
    }

    &:nth-child(4) {
      margin-top: 16px;
    }

    &:nth-child(5) {
      display: flex;
      justify-content: space-between;

      margin-top: 16px;

      span {
        display: flex;
        flex-direction: column;

        & + span {
          width: 30%;
        }

        span {
          display: flex;
          flex-direction: row;

          width: 140%;

          select {
            background: none;

            width: 90%;
            height: 70px;

            border: 2px solid black;

            display: flex;
            justify-content: center;
            align-items: center;

            font-size: 24px;

            padding: 0 16px;
          }

          select + select {
            margin-left: 16px;
          }
        }
      }
    }

    &:nth-child(6) {
      display: flex;
      flex-direction: column;

      margin-top: 16px;

      select {
        height: 70px;

        font-size: 24px;

        background: none;

        border: 2px solid black;

        padding: 16px;

      }
    }
  }
`

export const ProductColumn = styled.div`
  width: 33%;
  padding: 24px;
`

export const UserColumn = styled.div`
  width: 33%;
  padding: 24px;
`

export const PaymentColumn = styled.div`
  width: 33%;
  padding: 24px;
`
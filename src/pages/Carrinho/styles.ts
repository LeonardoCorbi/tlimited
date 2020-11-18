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
  width: 100%;
  height: 600px;
  
  border: 2px solid black;

  margin-top: 32px;

  padding: 16px 70px;
`

export const Titles = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
  height: 40px;

  background: white;

  div {
    width: 16.6%;

    &:nth-child(1) {
      width: 50%;
    }
  }
`

export const ItensCart = styled.div`
  max-height: 474px;
  height: 100%;
  width: 100%;

  overflow-y: auto;
`

export const Product = styled.div`
  width: 100%;
  height: 227px;

  border: 2px solid black;

  margin-bottom: 20px;

  display: flex;
  align-items: center;
  position: relative;

  div {
    width: 16.6%;

    img {
      width: 345px;
    }

    &:nth-child(1) {
      display: flex;
      align-items: center;

      width: 50%;
    }

    &:nth-child(2) {
      font-size: 36px;
      margin-left: 7%;
    }

    &:nth-child(4) {
      color: var(--green);
    }

    &:last-child {
      position: absolute;
      
      width: fit-content;

      right: 48px;

      cursor: pointer;
      user-select: none;
    }
  }
`

export const ArrowRight = styled(FaArrowRight)`
  transform: scale(1.5);
`

export const UserActions = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  height: 137px;

  margin-top: 24px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    width: 28%;

    &:nth-child(1) {
      justify-content: flex-end;
    
      button {
        background: white;
      }
    }

    button {
      height: 70px;
      width: 100%;
      
      color: black;
      font-size: 36px;

      padding-top: 8px;

      border: 2px solid black;

      background: var(--green);
      cursor: pointer;
    }

    span {
      width: fit-content;

      display: flex;

      .arrow {
        display: flex;
        justify-content: center;
        align-items: center;
       
        border: 2px solid black;
        border-left: none;

        height: 70px;

        background: var(--green);

        width: 100px;

        cursor: pointer;
      }

    }

    &:last-child {
      align-items: flex-end;

      span {
        font-size: 36px;

      }
    }
    input {
      height: 70px;
      width: 400px;

      font-size: 36px;
    }
  }
`

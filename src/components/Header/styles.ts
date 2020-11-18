import styled, { css } from 'styled-components'
import { BiSearch } from 'react-icons/bi'
import { MdShoppingCart, MdFlashOn } from 'react-icons/md'
import { BsPersonFill } from 'react-icons/bs'

interface SearchIconProps {
  active: boolean
}

export const Container = styled.header`
  position: fixed;
  top: 0;

  z-index: 1000;

  width: 100vw;
  /* height: 100vh; */

  display: flex;
  justify-content: center;

 
`

export const MenuContainer = styled.div`
  width: 100vw;
  height: 144px;
  padding: 0 37px;
  display: flex;
  position: relative;

  .avatarImg {
    width: 40px;
    height: 40px;

    border: 2px solid black;

    margin-left: 40px;

    cursor: default;
  }

  &::after {
    content: '';
    position: absolute;
    z-index: -10;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;

    background: white;
    opacity: 0.9;
  }
  -moz-backdrop-filter: blur(50px);
  -webkit-backdrop-filter: blur(50px);
  backdrop-filter: blur(10px);
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 4.2rem;
    font-weight: normal;

    a {
      text-decoration: none;
      color: black;
    }
  }

  nav ul {
    list-style: none;
  }

  nav ul li {
    display: inline;
    font-size: 2.4rem;
  }

  nav ul li + li {
    margin-left: 50px;
  }

  div {
    display: flex;
    align-items: center;

    position: relative;
  }

  div * {
    /* margin-left: 53px; */
    cursor: pointer;
  }

  .floatItemsCart {
    position: absolute;
    top: 0px;
    right: 70px;
    background: var(--green);

    border: 2px solid black;

    width: 24px;
    height: 24px;

    text-align: center;
    font-size: 16px;
    
    display: flex;
    justify-content: center;
    align-items: center;
    
    padding-top: 6px;

    pointer-events: none;
  }

`

export const SearchContainer = styled.div`
  display: flex;
  position: relative;

  input {
    position: absolute;
    left: 100px;
    z-index: 10;
    outline: 0;
    border: 2px solid black;
    font-family: industry-inc-base;
    font-size: 2.4rem;
    height: 58px;
    width: 1px;
    transform: 
      translateX(-100%);
    padding: 0 17px;
    opacity: 0;
    cursor: default;
    transition: all 200ms ease-in-out;
  }

  input:focus{
    width: 20vw;
    opacity: 1;
    cursor: text;
  }
`
const icons = css`
  width: 40px;
  height: 40px;
  margin-left: 53px;
  cursor: pointer;
`

export const SearchIcon = styled(BiSearch)`
  ${icons}
  z-index: 20;
  fill: ${(props: SearchIconProps) => props.active ? '#3DFB03' : 'black'};
  stroke-width: 1px;
  stroke: ${(props: SearchIconProps) => props.active ? '#3DFB03' : 'black'};
  margin-right: 53px;

`

export const FlashIcon = styled(MdFlashOn)`
  ${icons}
`

export const CartIcon = styled(MdShoppingCart)`
  ${icons}
`

export const ProfileIcon = styled(BsPersonFill)`
  ${icons}
`
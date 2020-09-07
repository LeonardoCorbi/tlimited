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

  z-index: 5;

  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;

 
`

export const MenuContainer = styled.div`
  width: 100vw;
  height: 144px;
  padding: 0 37px;
  display: flex;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    z-index: -10;
    right: 0;
    left: 0;
    top: 0;
    bottom: 0;

    background: white;
    opacity: 0.8;
  }
  -moz-backdrop-filter: blur(50px);
  -webkit-backdrop-filter: blur(50px);
  backdrop-filter: blur(50px);
  justify-content: space-between;
  align-items: center;

  h1 {
    font-size: 42px;
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
    font-size: 24px;
  }

  nav ul li + li {
    margin-left: 50px;
  }

  div {
    display: flex;
    align-items: center;
  }

  div * {
    margin-left: 53px;
    cursor: pointer;
  }

`

export const SearchContainer = styled.div`
  display: flex;
  position: relative;

  input {
    position: absolute;
    left: 50px;
    z-index: 10;
    outline: 0;
    border: 2px solid black;
    font-family: industry-inc-base;
    font-size: 24px;
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
  cursor: pointer;
`

export const SearchIcon = styled(BiSearch)`
  ${icons}
  z-index: 20;
  fill: ${(props: SearchIconProps) => props.active ? '#3DFB03' : 'black'};
  stroke-width: 1px;
  stroke: ${(props: SearchIconProps) => props.active ? '#3DFB03' : 'black'};
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
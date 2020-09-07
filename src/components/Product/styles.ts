import styled from 'styled-components';

import { MdShoppingCart } from 'react-icons/md'


export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  position: relative;

  border: 2px solid black;

  width: 250px;
  height: 370px;

  font-size: 24px;

  span {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: flex-end;

    span {
      margin-right: 5px;
    }
  }

  p {
    margin-left: 7px;
    transform: translateY(-10px);
  }

  div {
    display: flex;
    flex: 1;
    position: relative;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    transform: translateY(-18px);

    span {
      margin-left: 7px;
      transform: translateY(-5px);
      color: var(--green);
      position: absolute;
      left: 0;
    }
  }
`;

export const FlashIcon = styled.svg`
  height: 40px;
  fill: white;
  stroke: black;
  stroke-width: 2px;
  margin-right: 13px;
` 

export const ShoesImg = styled.img`
  flex-shrink: 0;
  flex-grow: unset;
  transform: translate(-25px, -5px);
  width: 110%;
`

export const AddCart = styled(MdShoppingCart)`
  width: 73px;
  height: 73px;
  position: absolute;
  padding: 0 12px;
  right: 0;
  border-top: 2px solid black;
  border-left: 2px solid black;
  border-bottom: 2px solid black;
  transform: translateY(-15px);
`
import styled from 'styled-components';

import { MdShoppingCart } from 'react-icons/md'


export const Container = styled.form`
  display: grid;
  grid-template-rows: 40px 150px 84px 81px ;
  grid-template-columns: auto;

  padding: 8px 8px;
  position: relative;

  border: 2px solid black;

  width: 232px;
  height: 344px;

  font-size: 2.2rem;

  #values {
    display: none;
  }

  .flashContainer {
    width: 215px;
    /* background: red; */
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;

    span {
      margin-right: 7px;
    }
  }

  button {
    background: none;
  }

  img {
    /* background: blue; */
    width: 248px;
    transform: translateX(-28px);
  }

  p {
    margin-top: 8px;
    width: 215px;
    /* background: yellow; */
  }

  .order {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    /* align-items: center; */
    width: 215px;

    /* background: green; */
    span {
      color: var(--green);
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

export const AddCart = styled(MdShoppingCart)`
  width: 64px;
  height: 64px;
  position: absolute;
  padding: 0 12px;
  right: 0;
  border-top: 2px solid black;
  border-left: 2px solid black;
  border-bottom: 2px solid black;
  transform: translateY(-15px);
`
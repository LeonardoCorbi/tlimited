import styled from 'styled-components';

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

  margin-right: 120px;
  margin-bottom: 80px;

  #values {
    display: none;
  }

  .flashContainer {
    width: 215px;
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
    width: 248px;
    transform: translateX(-28px);
  }

  p {
    margin-top: 8px;
    width: 215px;
  }

  .order {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    width: 215px;

    
    span {
      color: var(--green);
    }

    div {
      position: absolute;

      height: 66px;
      width: 100%;

      transform: translate(-6px, -14px);

      overflow: hidden;

      padding-top: 6px;
      padding-right: 100px;

      div {
        background: red;
        opacity: 0;

        border-top: 2px solid black;
        border-bottom: 2px solid black;
        position: absolute;
      }
    }
  }
`;

export const FlashIcon = styled.svg`
  height: 40px;
  stroke: black;
  stroke-width: 2px;
  margin-right: 13px;

  &:hover {
    cursor: pointer;
  }
` 

export const AddCart = styled.svg`
  width: 64px;
  height: 64px;
  position: absolute;
  padding: 0 12px;
  right: 0;
  border-top: 2px solid black;
  border-left: 2px solid black;
  border-bottom: 2px solid black;
  transform: translateY(-6px);

  &:hover {
    cursor: pointer;
  }
  
`
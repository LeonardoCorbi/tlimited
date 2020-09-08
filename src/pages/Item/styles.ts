import styled from 'styled-components';

export const Container = styled.div`
`;

export const Content = styled.main`
  padding: 0 38px;
  margin-top: 144px;

  display: grid;
  
  grid-template-columns: 383px auto 251px;
  grid-template-rows: auto auto;

  grid-template-areas:
    'AboutPlace ShoesImagePlace OrderFunctionPlace'
    'HistPlace HistPlace HistPlace'
  ;
`

export const AboutPlace = styled.div`
  grid-area: AboutPlace;

  h2 {
    font-size: 3.6rem;
    color: var(--green);
  }

  p {
    margin-top: 4px;
    font-size: 2.4rem;
  }
`

export const DesignerInfo = styled.div`
  display: flex;
  position: relative;
  margin-top: 24px;
  margin-left: 13px;

  span {

    &::before {
      height: 111px;
      width: 103px;
      max-width: 111px;
      content: '';
      position: absolute;
      z-index: -5;
      border: 2px solid var(--green);
      top: 13px;
      right: 13px;
      bottom: -13px;
      left: -13px;
    }

    img {
      height: 111px;
      z-index: 6;
    } 
  
  }


  div {
    margin-left: 16px;

    h2 {
      font-size: 2.4rem;
      color: black

    }
    p {
      color: var(--green);
    }
  }
`

export const ShoesImagePlace = styled.div`
  grid-area: ShoesImagePlace;

  display: flex;
  flex-shrink: 0;
  flex-grow: 0;
  flex-direction: column;

  padding: 0 111px;
`

export const FlashContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;

  span {
    font-size: 3.6rem;
  }

  span + span {
    margin: 0 12px;
    font-size: 2.4rem;
  }
`

export const FlashIcon = styled.svg`
  fill: var(--green);
  stroke: black;
  stroke-width: 2px;
`

export const Indicator = styled.div`

`

export const OrderFunctionPlace = styled.div`
  grid-area: OrderFunctionPlace;
`

export const OrderFormWrapper = styled.form`

`

export const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  h1 {
    font-size: 3.6rem;
  }

  h2 {
    font-size: 2.4rem;
    color: var(--green);
  }
`

export const SizeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  font-size: 2.4rem;

  margin-top: 32px;

  .organizer {
    display: flex;

    margin-top: 5px;

    div + div {
      margin-left: 8px;
    }
  }

  .radioWrapper {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    width: 40px;
    height: 40px;

    border: 2px solid black;

    input {
      position: absolute;
      appearance: none;

      width: 40px;
      height: 40px;

      &:checked {
        background: var(--green);
      }
    }

    span {
      position: absolute;
      /* display: none; */
      cursor: default;
    }
  }
`

export const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  margin-top: 40px;

  h1 {
    font-size: 3.6rem;
  }

  p {
    font-size: 2.4rem;
    color: var(--green);
  }

  p + p {
    color: black;
  }

`

export const AmountContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  margin-top: 34px;

  div {
    font-size: 3.6rem;
    display: flex;

    button {
      font-size: 3.6rem;

      border: 2px solid black;
      background: white;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 106px;
      height: 50px;
    }

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      padding-left: 8px;
      font-size: 3.6rem;
      border: 2px solid black;
      width: 49px;
      max-height: 50px;
    }

  }

  p {
    margin-top: 5px;
    font-size: 1.6rem;
    color: var(--green);
  }
`

export const BuyButton = styled.button`
  margin-top: 44px;

  width: 100%;
  height: 88px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: var(--green);

  border: 2px solid black;

  padding: 22px 16px;

  span {
    font-size: 3.6rem;
    margin-right: 8px;
  }
`

export const HistPlace = styled.div`
  grid-area: HistPlace;
`

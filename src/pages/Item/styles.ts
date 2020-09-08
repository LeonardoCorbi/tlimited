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
    font-size: 2.4rem;
  }
`

export const DesignerInfo = styled.div`
  display: flex;
  position: relative;

  img {
    height: 111px; 
  }

  img::before {
    content: 'dgrfdfg';
    position: absolute;
    border: 5px solid var(--green);
    top: 13px;
    right: 13px;
    bottom: 13px;
    left: 13px;
  }

  div {

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
`

export const FlashContainer = styled.div`

`

export const FlashIcon = styled.img`

`

export const Indicator = styled.div`

`

export const OrderFunctionPlace = styled.div`
  grid-area: OrderFunctionPlace;
`

export const OrderFormWrapper = styled.div`

`

export const NameContainer = styled.div`

`

export const SizeContainer = styled.div`

`

export const PriceContainer = styled.div`

`

export const AmountContainer = styled.div`

`

export const BuyButton = styled.div`

`

export const HistPlace = styled.div`
  grid-area: HistPlace;
`

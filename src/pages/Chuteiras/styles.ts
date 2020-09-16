import styled from 'styled-components';

export const Container = styled.div`
  
`

export const Content = styled.main`
  margin-top: 144px;

  display: grid;
  grid-template-columns: 210px auto;
  grid-template-areas:
    'leftside products'
    'ad ad'
    'recommend recommend'
    'footer footer';

  padding: 0 38px;

  max-width: 1920px;
  height: 100%;


`
export const LeftColumn = styled.div`
  grid-area: leftside;
  display: block;

  height: calc(100vh - 144px);
  width: 210px;
  font-size: 2.2rem;
  line-height: 35px;
`
export const OrderBy = styled.div`
 
  ul {
    margin-top: 6px;
  }
`

export const Brands = styled.div`
  margin-top: 24px;
  position: relative;

  div {
    display: grid;
    grid-template-columns: repeat(3, 40px);
    grid-template-rows: repeat(2, 40px);
    grid-column-gap: 10px;
    grid-row-gap: 15px;

    margin-top: 11px;

    position: relative;

    span {
      display: flex;
      align-items: center;
      justify-content: center;

      position: relative;

      input {
        appearance: none;
        -moz-appearance: none;
        -webkit-appearance: none;

        display: absolute;

        width: 40px;
        height: 40px;

        z-index: 10;

        &:checked {
          background: var(--green);
          z-index: 0;
        }
      }

      img {
        position: absolute;
      }

    }
  }
`

export const SizeSelector = styled.div`
  margin-top: 24px;
  position: relative;
  
  div {
    display: grid;
    grid-template-columns: repeat(3, 40px);
    grid-template-rows: repeat(3, 40px);
    grid-column-gap: 10px;
    grid-row-gap: 15px;

    margin-top: 11px;

    p {
      margin: 0;
      padding: 0;
    }
    
    span {
      display: flex;
      justify-content: center;
      align-items: center;

      position: relative;

      input {
        appearance: none;
        -moz-appearance: none;
        -webkit-appearance: none;

        position: absolute;

        width: 40px;
        height: 40px;

        z-index: 10;

        &:checked {
          background: var(--green);
          z-index: 0;
        }
      }

      p {
        cursor: default;
        position: absolute;
      }
    }
  }
`

export const ColorSelector = styled.div`
  margin-top: 24px;

  div {
    display: grid;
    grid-template-columns: repeat(3, 40px);
    grid-template-rows: repeat(2, 40px);
    grid-column-gap: 10px;
    grid-row-gap: 15px;

    margin-top: 10px;

    .green {
      background: var(--green);
    }

    .red {
      background: #EA3E2C;
    }

    .orange {
      background: #DA6625;
    }

    .yellow {
      background: #F5F09C;
    }

    .purple {
      background: #594E96;
    }

    .reddish-purple {
      background: #BF2F55;
    }

    input {
      appearance: none;
      -moz-appearance: none;
      -webkit-appearance: none;

      width: 40px;
      height: 40px;

      transition: all 200ms ease-in-out;

      &:checked {
        border: 2px solid var(--green);
      }
    }
  }
`

export const Products = styled.article`
  grid-area: products;
  margin-left: 79px;
  max-height: calc(100vh - 144px);
  overflow: auto;

  padding-left: 20px;

  /* display: grid;
  grid-template-columns: repeat(4, 250px);
  grid-column-gap: 148px;
  grid-row-gap: 71px;  */

  display: flex;
  flex-wrap: wrap;

`

export const AdContainer = styled.div`
  grid-area: ad;
  position: relative;
  height: 100px;
  margin-top: 20px;

  p {
    top: 111px;
    left: 137px;
    font-size: 6.4rem;
    position: absolute;
    z-index: 9;

    @media(max-width: 1550px) {
      font-size: 4rem;
    }
    @media(max-width: 1110px) {
      font-size: 2rem;
    }


    div {
      font-size: 8rem;

      @media(max-width: 1550px) {
      font-size: 5rem;
      }
      @media(max-width: 1110px) {
      font-size: 2.5rem;
      }

      span {
        color: var(--green);
      }
    }
  }

  img {
    width: 99vw;
    position: absolute;
    left: -38px;
    z-index: 8;
    max-height: 550px;
  }

  /* &::after {
    content: '';
    height: 50rem;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 2px solid black;
    position: absolute;
    z-index: 100;
  } */

`
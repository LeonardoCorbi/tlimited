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
  /* border: 1px solid black; */
  grid-area: leftside;
  display: block;

  height: calc(100vh - 144px);
  width: 210px;
  font-size: 2.2rem;
  line-height: 35px;

  ul {
    margin-top: 6px;
  }
  ul li {
    margin-left: 2px;
  }

  span + span ul {
    margin-top: 11px;
    display: grid;
    grid-template-columns: repeat(3, 40px);
    grid-template-rows: repeat(2, 40px);
    grid-column-gap: 10px;
    grid-row-gap: 15px;
  }

  span + span ul li {
    display: flex;
    justify-content: center;
    align-items: center;
  }


  .selectors {
    width: 40px;
    height: 40px;
    border: 2px solid black;
  }

  span + span p {
    margin-top: 32px;
  }

  span + span + span + span {
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

    .dark-purple {
      background: #BF2F55;
    }
  }
`

export const Products = styled.article`
  /* border: 1px solid black; */
  grid-area: products;
  margin-left: 79px;
  max-height: calc(100vh - 144px);
  overflow: auto;

  padding-left: 20px;

  display: grid;
  grid-template-columns: repeat(4, 250px);
  grid-column-gap: 148px;
  grid-row-gap: 71px; 

  .demo {
    background: red;
    width: 250px;
    height: 370px;
  }
`

export const AdContainer = styled.div`
  grid-area: ad;
  position: relative;
  height: 100px;

  p {
    top: 111px;
    left: 137px;
    font-size: 6.4rem;
    position: absolute;
    z-index: 9;


    div {
      font-size: 8rem;

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
  }

  &::after {
    content: '';
    height: 50rem;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border: 2px solid black;
    position: absolute;
    z-index: 100;
  }

`
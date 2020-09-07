import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1920px;
`;

export const Content = styled.main`
  margin-top: 144px;

  display: flex;
  flex-direction: row;

  padding: 0 38px;

  width: 100%;
  height: 100%;

`
export const LeftColumn = styled.div`
  /* border: 1px solid black; */
  display: block;

  height: calc(100vh - 144px);
  width: 210px;
  font-size: 24px;
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
  width: 100%;
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
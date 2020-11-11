import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Recommended from '../../components/Recommended';

import { 
  BreadCrumbs,
  Container,
  ItensContainer,
  UserActions,
} from './styles';

const Carrinho: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <BreadCrumbs>
          <span><p>revise seu carrinho</p></span>
          <span><p>identificação</p></span>
          <span><p>pagamento</p></span>
        </BreadCrumbs>
        <ItensContainer>
        </ItensContainer>
        <UserActions>
        </UserActions>
      </Container>
      <Footer />
    </>
  );
};

export default Carrinho;

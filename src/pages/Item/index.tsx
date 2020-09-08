import React from 'react';

import { 
  Container, 
  Content,
  AboutPlace,
  DesignerInfo,
  ShoesImagePlace,
  FlashContainer,
  FlashIcon,
  Indicator,
  OrderFunctionPlace,
  OrderFormWrapper,
  NameContainer,
  SizeContainer,
  PriceContainer,
  AmountContainer,
  BuyButton,
  HistPlace,
} from './styles';

import Header from '../../components/Header';
import Recommended from '../../components/Recommended';
import Footer from '../../components/Footer';

const Item: React.FC = () => {
  return (
    <Container>

      <Header />

      <Content>

        <AboutPlace>
        
          <h2>história e material</h2>
        
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet.</p>
        
          <DesignerInfo>

            <img src={require('../../assets/designer1.png')} alt="img"/>

            <div>
              <h2>MAIA VOLPATO</h2>
              <p>NIKE PRODUCT DESIGNER</p>
            </div>

          </DesignerInfo>
        </AboutPlace>

        <ShoesImagePlace>

          <FlashContainer>

            <span>220</span>
            <span> flaslikes </span>
            <FlashIcon />

          </FlashContainer>

          <img src={require('../../assets/foot2_big.png')} alt="big"/>

          <Indicator>

          </Indicator>

        </ShoesImagePlace>

        <OrderFunctionPlace>

          <OrderFormWrapper>
            
            <NameContainer>

            </NameContainer>
            
            <SizeContainer>

            </SizeContainer>

            <PriceContainer>

            </PriceContainer>

            <AmountContainer>

            </AmountContainer>

            <BuyButton />

          </OrderFormWrapper>
          
        </OrderFunctionPlace>



        <HistPlace>

        </HistPlace>

      </Content>

      <Recommended />
      
      <Footer />

    </Container>
  );
};

export default Item;

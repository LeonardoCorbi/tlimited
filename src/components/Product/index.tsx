import React from 'react';


import { 
  Container, 
  FlashIcon,
  ShoesImg,
  AddCart,
} from './styles';

interface ShoesProps {
  flashNumber: number
  imageUrl: string
  name: string
  price: number
}

const Product: React.FC = () => {
  return (
    <Container>
      
      <span>
        <span>768</span>
        <FlashIcon 
        width="28.781" 
        height="40" 
        viewBox="0 0 27.781 42">
          <path d="M24.609,16.484h-9.7L23.282,1.753A1.171,1.171,0,0,0,22.265,0H8.2A1.171,1.171,0,0,0,7.091.8L.06,21.972a1.171,1.171,0,0,0,1.111,1.543h9.942L4.782,38.367a1.171,1.171,0,0,0,1.952,1.24l18.75-21.172a1.172,1.172,0,0,0-.876-1.95Zm0,0"/>
        </FlashIcon>
      </span>
      
      <ShoesImg src={require('../../assets/foot1.png')} alt="Tenis1"/>
      
      <p>Nike Chuteira BOB Ano 2020</p>

      <div>

        <span>R$897,90</span>
        <AddCart />

      </div>
    
    </Container>
  );
};

export default Product;

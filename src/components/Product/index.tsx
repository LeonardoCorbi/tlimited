import React from 'react';


import { 
  Container, 
  FlashIcon,
  AddCart,
} from './styles';

interface ShoesProps {
  id: number
  flashNumber: number
  imageUrl: string
  name: string
  price: string
}

const Product: React.FC<ShoesProps> = ({
  id,
  flashNumber,
  imageUrl,
  name,
  price
}) => {
  return (
    <Container method="POST" action="http://localhost/tlimited/item.php">
      
      <div className="flashContainer">

        <div id="values">
          <input type="number" name="itemID" id="itemID" value={id}/>
        </div>

        <span>{flashNumber}</span>

        <FlashIcon 
        width="28.781" 
        height="40" 
        viewBox="0 0 27.781 42">
          <path d="M24.609,16.484h-9.7L23.282,1.753A1.171,1.171,0,0,0,22.265,0H8.2A1.171,1.171,0,0,0,7.091.8L.06,21.972a1.171,1.171,0,0,0,1.111,1.543h9.942L4.782,38.367a1.171,1.171,0,0,0,1.952,1.24l18.75-21.172a1.172,1.172,0,0,0-.876-1.95Zm0,0"/>
        </FlashIcon>

      </div>
      
      <button type="submit">
        <img src={require(`../../assets/foot1.png`)} alt={`Imagem ${name}`}/>
      </button>
      
      <p>{name}</p>

      <div className="order">

        <span>R${price}</span>
        <AddCart />

      </div>
    
    </Container>
  );
};

export default Product;

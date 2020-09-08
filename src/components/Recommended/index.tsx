import React from 'react';

import { Container } from './styles';
import Product from '../Product';
import { shoes } from '../../seed';

const Recommended: React.FC = () => {
  return (
    <Container>
      <p>PARA VOCÊ</p>

      <span>

        <Product 
          flashNumber={shoes[3].flashNumber} 
          imageUrl={shoes[3].imageUrl} 
          name={shoes[3].name} 
          price={shoes[3].price}
        />
        <Product 
          flashNumber={shoes[0].flashNumber} 
          imageUrl={shoes[0].imageUrl} 
          name={shoes[0].name} 
          price={shoes[0].price}
        />
        <Product 
          flashNumber={shoes[1].flashNumber} 
          imageUrl={shoes[1].imageUrl} 
          name={shoes[1].name} 
          price={shoes[1].price}
        />
        <Product 
          flashNumber={shoes[2].flashNumber} 
          imageUrl={shoes[2].imageUrl} 
          name={shoes[2].name} 
          price={shoes[2].price}
        />
        <Product 
          flashNumber={shoes[3].flashNumber} 
          imageUrl={shoes[3].imageUrl} 
          name={shoes[3].name} 
          price={shoes[3].price}
        />   

      </span>

    </Container>
  );
};

export default Recommended;

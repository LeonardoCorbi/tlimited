import React, { useEffect, useState } from 'react';
import axios from 'axios'

import { Container } from './styles';
import Product from '../Product';
import { shoes } from '../../seed';

interface RecommendedProps {
  brand: string
}

interface ProductProps {
  id: number
  nome: string
  flashlikes: number
  valor: string
  imagem: string
}

const Recommended: React.FC<RecommendedProps> = ({
  brand
}) => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const brandFD = new FormData()
    brandFD.append('brand', brand)

    axios.post('https://leonardocorbi.dev/php/getRecommendedProducts.php', brandFD)
      .then(res => setProducts(res.data))
      .catch(err => console.log(err))
  }, [])

  return (
    <Container>
      <p>PARA VOCÊ</p>

      <span>
        {
          products.map((prod: ProductProps) => (
            <Product
              id={prod.id} 
              flashNumber={prod.flashlikes} 
              imageUrl={prod.imagem} 
              name={prod.nome} 
              price={prod.valor}
            />
          ))
        }
      </span>

    </Container>
  );
};

export default Recommended;

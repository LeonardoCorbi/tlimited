import React from 'react';

import { Container } from './styles';

interface AdName {
  adName?: string
}

const Ad: React.FC<AdName> = ({
  adName
}) => {
  return (
    <Container>
      {
        adName === 'Home'
          ? <img src={require('../../assets/images/adTodos.png')} alt=""/>
        
        : adName === 'Nike'
          ? <img src={require('../../assets/images/adNike.png')} alt=""/>
        
        : adName === 'Adidas'
          ? <img src={require('../../assets/images/adAdidas.png')} alt=""/>
        
        : adName === 'Puma'
          ? <img src={require('../../assets/images/adPuma.png')} alt=""/>
        
        : undefined
      }
    </Container>
  )
}

export default Ad;

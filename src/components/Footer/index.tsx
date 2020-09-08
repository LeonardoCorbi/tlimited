import React from 'react';

import { Container, FaceIcon, TwitterIcon, InstaIcon } from './styles';

import flashLight from '../../assets/icons/flashIcon.svg' 

const Footer: React.FC = () => {
  return (
    <Container>
      
      <h1>TLIMITED</h1>

      <span className="areas">
        <ul>
          <li>Todos</li> 
          <li>Tênis</li> 
          <li>Chuteiras</li> 
          <li>sneakers</li>
        </ul>
      </span>

      <span className="about">
        <ul>
          <li>pq comprar na tlimited?</li> 
          <li>contato</li>
          <li>minha conta</li>
          <li>trocas e devoluções</li>
          <li>reviews de clientes</li>
        </ul>
      </span>

      <span className="newsletter">
        <p>Receba novidades e descontos por e-mail!</p>

        <input type="email" name="email" id="email"/>

        <button type="button">
          cadastrar
          <img height="18" src={flashLight} alt="flashIcon"/>
        </button>
      </span>

      <span className="social">
        <p>Nossas redes sociais</p>

        <div>
          <span><FaceIcon /></span>
          <span><TwitterIcon /></span>
          <span><InstaIcon /></span>
        </div>
        
      </span>

    </Container>
  );
};

export default Footer;

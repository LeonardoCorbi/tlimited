import React from 'react';

import { 
  Container,
  Content,
  LeftColumn,
  Products, 
} from './styles';
import Header from '../../components/Header';
import Product from '../../components/Product';

const Todos: React.FC = () => {
  return (
    <Container>
      <Header todos/>
      <Content>
        <LeftColumn>

          <span>
            
            <p>ORDEM</p> 

            <ul id="order">
              <li>PREFERIDOS</li>
              <li>PROMOÇÕES</li>
              <li>LANÇAMENTO</li>
              <li>MAIOR PREÇO</li>
              <li>MENOR PREÇO</li>
            </ul>

          </span>

          <span>

            <p>MARCAS</p>
            
            <ul>
              <li className="selectors">
                <img src={require('../../assets/icons/nikeIcon.svg')} alt="NikeIcon"/>
              </li>
              <li className="selectors">
                <img src={require('../../assets/icons/adidasIcon.png')} alt=""/>
              </li>
              <li className="selectors">
                <img src={require('../../assets/icons/newBalanceIcon.png')} alt=""/>
              </li>
              <li className="selectors">
                <img src={require('../../assets/icons/reebokIcon.png')} alt=""/>
              </li>
              <li className="selectors">
                <img src={require('../../assets/icons/pumaIcon.png')} alt=""/>
              </li>
              <li className="selectors">
                <img src={require('../../assets/icons/underArmorIcon.png')} alt=""/>
              </li>
            </ul>
          </span>

          <span>

            <p>TAMANHO</p>

            <ul>
              <li className="selectors">36</li>
              <li className="selectors">37</li>
              <li className="selectors">38</li>
              <li className="selectors">39</li>
              <li className="selectors">40</li>
              <li className="selectors">41</li>
              <li className="selectors">42</li>
              <li className="selectors">43</li>
              <li className="selectors">44</li>
            </ul>
          </span>

          <span>

            <p>CORES</p>

            <ul>
              <li className="selectors green"></li>
              <li className="selectors red"></li>
              <li className="selectors orange"></li>
              <li className="selectors yellow"></li>
              <li className="selectors purple"></li>
              <li className="selectors dark-purple"></li>
            </ul>
          </span>

        </LeftColumn>

        <Products>
          
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          <Product />
          
        </Products>
      </Content>
    </Container>
  );
};

export default Todos;

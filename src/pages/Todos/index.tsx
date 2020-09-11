import React from 'react';

import { 
  Container,
  Content,
  LeftColumn,
  Products,
  AdContainer,
  OrderBy,
  Brands,
  SizeSelector,
  ColorSelector,
} from './styles';
import Header from '../../components/Header';
import Product from '../../components/Product';
import Footer from '../../components/Footer';
import { shoes } from '../../seed';
import Recommended from '../../components/Recommended';
import { Link } from 'react-router-dom';

const Todos: React.FC = () => {

  
  return (
    <Container>
      <Header todos/>
      <Content>
        <LeftColumn>

          <OrderBy>
            
            <p>ORDEM</p> 

            <ul>
              <li>PREFERIDOS</li>
              <li>PROMOÇÕES</li>
              <li>LANÇAMENTO</li>
              <li>MAIOR PREÇO</li>
              <li>MENOR PREÇO</li>
            </ul>

          </OrderBy>

          <Brands>

            <p>MARCAS</p>
            
            <div>

              <span>

                <input type="checkbox" name="brands" id="brands" />
                <img src={require('../../assets/icons/nikeIcon.svg')} alt="NikeIcon"/>

              </span>

              <span>

                <input type="checkbox" name="brands" id="brands"/>
                <img src={require('../../assets/icons/adidasIcon.png')} alt="adidasIcon"/>

              </span>

              <span>

                <input type="checkbox" name="brands" id="brands"/>
                <img src={require('../../assets/icons/newBalanceIcon.png')} alt="newBalanceIcon"/>

              </span>

              <span>

                <input type="checkbox" name="brands" id="brands"/>
                <img src={require('../../assets/icons/reebokIcon.png')} alt="reebokIcon"/>

              </span>

              <span>

                <input type="checkbox" name="brands" id="brands"/>
                <img src={require('../../assets/icons/pumaIcon.png')} alt="pumaIcon"/>

              </span>

              <span>

                <input type="checkbox" name="brands" id="brands"/>
                <img src={require('../../assets/icons/underArmorIcon.png')} alt="underArmorIcon"/>

              </span>
              
            </div>

          </Brands>

          <SizeSelector>

            <p>TAMANHO</p>

            <div>

              <span>

                <input type="radio" name="size" id="size" value="36"/>
                <p>36</p>
                
              </span>

              <span>

                <input type="radio" name="size" id="size" value="37"/>
                <p>37</p>
                
              </span>

              <span>

                <input type="radio" name="size" id="size" value="38"/>
                <p>38</p>
                
              </span>

              <span>

                <input type="radio" name="size" id="size" value="39"/>
                <p>39</p>
                
              </span>

              <span>

                <input type="radio" name="size" id="size" value="40"/>
                <p>40</p>
                
              </span>

              <span>

                <input type="radio" name="size" id="size" value="41"/>
                <p>41</p>
                
              </span>

              <span>

                <input type="radio" name="size" id="size" value="42"/>
                <p>42</p>
                
              </span>

              <span>

                <input type="radio" name="size" id="size" value="43"/>
                <p>43</p>
                
              </span>

              <span>

                <input type="radio" name="size" id="size" value="44"/>
                <p>44</p>
                
              </span>

            </div>

          </SizeSelector>

          <ColorSelector>

            <p>CORES</p>

            <div>

              <input type="checkbox" className="green" name="green" id="green"/>
              <input type="checkbox" className="red" name="red" id="red"/>
              <input type="checkbox" className="orange" name="orange" id="orange"/>
              <input type="checkbox" className="yellow" name="yellow" id="yellow"/>
              <input type="checkbox" className="purple" name="purple" id="purple"/>
              <input type="checkbox" className="reddish-purple" name="reddish-purple" id="reddish-purple"/>
            
            </div>
            
          </ColorSelector>

        </LeftColumn>

        <Products>
          
          {
            shoes.map(item => (
              <Link
                key={item.name}
                to={'/item'}
              >
                <Product 
                  flashNumber={item.flashNumber}
                  imageUrl={item.imageUrl}
                  name={item.name}
                  price={item.price}
                />
              </Link>
            ))
          }

          
          
          
        </Products>
  
        <AdContainer>
          
          <img src={require('../../assets/adTodos.png')} alt=" Propaganda de Promoção de 30% de desconto"/>

          <p>
            PROMOÇÃO NIKE<br/>
            EDIÇÃO LIMITADA COM<br/>
            <div><span>30%</span> DE DESCONTO</div> 
          </p>

        </AdContainer>

         

      </Content>
      <Recommended />
      <Footer />
    </Container>
  );
};

export default Todos;

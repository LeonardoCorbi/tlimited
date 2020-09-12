import React from 'react';

import { 
  Container,
  Column1,
  Column2,
  Column3,
  Content, 
} from './styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Cadastro: React.FC = () => {
  return (
    <Container>
      <Header />
      <Content>

        <h1>faça login ou crie sua conta</h1>

        <form>
          
          <p>crie sua conta:</p>
          
          <div>
            <Column1>

              <label htmlFor="name">nome:</label>
              <input type="text" name="name" id="name"/>

              <label htmlFor="email">email:</label>
              <input type="email" name="email" id="email"/>

              <label htmlFor="cpf">cpf:</label>
              <input type="text" name="cpf" id="cpf"/>

              <label htmlFor="phone">celular:</label>
              <input type="tel" name="phone" id="phone"/>

            </Column1>
            <Column2>

              <label htmlFor="cep">cep:</label>
              <input type="text" name="cep" id="cep"/>

              <label htmlFor="street">rua/avenida:</label>
              <input type="text" name="street" id="street"/>

              <span>
                
                <div>
                  <label htmlFor="number">número:</label>
                  <input type="number" name="number" id="number"/>
                </div>

                <div>
                  <label htmlFor="uf">estado:</label>
                  <select name="uf" id="uf">
                    <option value="sp">SP</option>
                    <option value="rj">RJ</option>
                  </select>              
                </div>

              </span>

              <label htmlFor="city">cidade:</label>
              <select name="city" id="city">
                <option value="araraquara">Araraquara</option>
              </select>

              
            </Column2>
            <Column3>

              <label htmlFor="complement">complemento:</label>
              <input type="text" name="complement" id="complement"/>

              <label htmlFor="password">Senha:</label>
              <input type="password" name="password" id="password"/>
              
              <label htmlFor="avatar">selecione sua foto:</label>
              <input className="avatar" type="file" name="avatar" id="avatar"/>
              
              <label htmlFor="submitBtn">tudo pronto?</label>
              <button type="submit" name="submitBtn" id="submitBtn">
                Criar conta
              </button>

            </Column3>
          </div>

        </form>
        
      </Content>
      <Footer />
    </Container>
  );
};

export default Cadastro;

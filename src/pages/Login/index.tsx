import React from 'react';
import { Link } from 'react-router-dom';

import { 
  Container, 
  Content, 
} from './styles';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Login: React.FC = () => {
  return (
    <Container>
      <Header />
      <Content>

        <h1>faça login ou crie sua conta</h1>

        <form action="">

          <p>Faça login ou crie uma conta para continuar</p>

          <label htmlFor="userName">email ou cpf:</label>
          <input type="text" name="userName" id="userName"/>

          <label htmlFor="password">senha:</label>
          <input type="password" name="password" id="password"/>

          <button type="submit">Fazer login</button>

          <span>ainda não tem uma conta?</span>
          <Link to="/cadastro"><h2>criar conta</h2></Link>
          
        </form>
      </Content>
      <Footer />
    </Container>
  );
};

export default Login;

import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'

import { 
  Container, 
  Content, 
} from './styles';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const Login: React.FC = () => {

  const login = el => {
    el.preventDefault()

    axios.get('https://leonardocorbi.dev/php/login.php')
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }
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

          <button onClick={el => login(el)}>Fazer login</button>

          <span>ainda não tem uma conta?</span>
          <Link to="/cadastro"><h2>criar conta</h2></Link>
          
        </form>
      </Content>
      <Footer />
    </Container>
  );
};

export default Login;

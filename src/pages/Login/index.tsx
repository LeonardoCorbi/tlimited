import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'

import { 
  Container, 
  Content,
  HiddenEye,
  ShownEye, 
} from './styles';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { setLogin } from '../../Redux/Login'
import { setUser } from '../../Redux/User'
import { ReduxProps } from '../../Redux';

const Login: React.FC = () => {
  document.title = 'TLIMITED - LOGIN'

  const [visible, setVisible] = useState(false)
  const [senhaInvalida, setSenhaInvalida] = useState(false)
  const [usuarioInvalido, setUsuarioInvalido] = useState(false)

  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const [loginRes, setLoginRes] = useState('')
  const dispatch = useDispatch()
  const isLogged = useSelector((redux: ReduxProps) => redux.login)

  if(isLogged) {
    window.history.back()
  }

  const login = async el => {
    el.preventDefault()

    const loginFD = new FormData()
    loginFD.append('name', name)
    loginFD.append('password', password)

    const res = await axios.post('https://leonardocorbi.dev/php/login.php', loginFD)

    if(res.data === 'usuario') {
      setUsuarioInvalido(true)
    }else if(res.data === 'senha'){
      setSenhaInvalida(true)
    }else {
      dispatch(setUser(res.data))
      dispatch(setLogin(true))
      window.history.back()
    }
  }
 
  return (
    <Container>
      <Header />
      <Content>
        <h1>faça login ou crie sua conta</h1>

        <form>

          <p>Faça login ou crie uma conta para continuar</p>

          <label htmlFor="userName">email ou cpf:</label>
          <input type="text" name="userName" id="userName" required
            onChange={el => setName(el.target.value)}
            className={usuarioInvalido ? 'erro' : undefined}
            onFocus={() => setUsuarioInvalido(false)}
            />

          <label htmlFor="password">senha:</label>
          <div className="wrapper">
            <input type={visible ? 'text' : 'password'} name="password" id="password" required
              onChange={el => setPassword(el.target.value)}
              className={senhaInvalida ? 'erro' : undefined}
              onFocus={() => setSenhaInvalida(false)}
            />
            {
              visible 
                ? <HiddenEye onClick={() => setVisible(false)}/> 
                : <ShownEye onClick={() => setVisible(true)}/> 
            }
          </div>

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

import React, { useContext, useEffect, useRef, useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { useSelector, useDispatch } from 'react-redux'
import { cleanCart } from '../../Redux/Cart'

import { 
  Container,
} from './styles';
import Recommended from '../../components/Recommended';
import { ReduxProps } from '../../Redux';
import { UserProps } from '../../Redux/User';

const TelaFinal = () => {
  const dispatch = useDispatch()

  const isLogged = useSelector((redux: ReduxProps) => redux.login)
  const userInfo = useSelector((redux: ReduxProps) => redux.user as UserProps)

  if(isLogged) {
    dispatch(cleanCart(''))
  }else {
    window.location.href = '/login'
  }
  
  return (
    <>
      <Header />
      <Container>
        <p className="title">PEDIDo efetuado com sucesso!</p>
        <div>
          <p>tudo certo {userInfo.nome}! <br/>sua compra foi efetuada com sucesso e dentro de alguns dias você estará com seu tênis exclusivo!</p>
          
          <button onClick={() => window.location.href = '/'}>VOLTAR PARA HOME</button>
        </div>

      </Container>
      <Recommended brand={''}/>
      <Footer />
    </>
  );
};

export default TelaFinal;

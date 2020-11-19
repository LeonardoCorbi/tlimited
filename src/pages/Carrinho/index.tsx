import React, { useContext, useEffect, useRef, useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { ReduxProps } from '../../Redux'
import { CartProps, removeCart } from '../../Redux/Cart'

import { 
  ArrowRight,
  BreadCrumbs,
  Container,
  ItensCart,
  ItensContainer,
  Product,
  Titles,
  UserActions,
} from './styles';

const Carrinho = () => {
  const [prodInfo, setProdInfo] = useState([])

  const [ids, setIds] = useState([])

  const dispatch = useDispatch()
  const cartItems = useSelector((redux: ReduxProps) => redux.cart)

  const isLogged = useSelector((redux: ReduxProps) => redux.login)

  if(!isLogged) {
    window.location.href = '/login'
  }
  
  const valorRef = useRef<HTMLSpanElement>(null)
  var total = 0

  useEffect(() => {
    valorRef.current.textContent = 'Total: '+total.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
  }, [total])

  const somaTotal = (price, amount) => {
    total += price * amount
  }

  return (
    <>
      <Header />
      <Container>
        <BreadCrumbs>
          <span><p>revise seu carrinho</p></span>
          <span><p onClick={() => {}}>identificação</p></span>
          <span><p>pagamento</p></span>
        </BreadCrumbs>
        <ItensContainer>
          <Titles>
            <div><p>produtos</p></div>
            <div><p>quantidade</p></div>
            <div><p>valor unitário</p></div>
            <div><p>valor total</p></div>
          </Titles>
          <ItensCart>
            {
              cartItems.length > 0
                ? cartItems.map((item: CartProps) => (
                    <Product>
                      <div>
                        <img src={item.image} alt=""/>
                        <span>
                          {item.name}<br/>
                          cor: {item.color} <br/>
                          tamanho: {item.size}
                        </span>
                      </div>
                      <div>
                        {item.amount}
                      </div>
                      <div>
                        {(item.price).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}
                      </div>
                      <div>
                        {((item.amount) * item.price).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}
                      </div>
                      <div
                        onClick={() => {
                          dispatch(removeCart(item.name))
                          setTimeout(() => {
                            window.location.reload()
                          }, 100)
                        }}
                      >
                        X
                      </div>
                    </Product>
                  ))
                : <p>Não há itens no carrinho </p>
            }
            
          </ItensCart>
        </ItensContainer>
        <UserActions>
          <div>
            <button
              onClick={() => window.location.href = '/'}
            >Continuar comprando</button>
          </div>
          <div>
            <label htmlFor="frete">Frete e prazo:</label>
            <span>
              <input type="text"/>
              <div className="arrow">
                <ArrowRight />
              </div>
            </span>
          </div>
          <div>
            <span ref={valorRef}>Total: {cartItems.map((item: CartProps) => {
              somaTotal(item.price, item.amount)
              return <div />
              })}
            </span>
            <button
              onClick={() => window.location.href = '/finalizar-compra'}
            >Finalizar compra</button>
          </div>
        </UserActions>
      </Container>
      <Footer />
    </>
  );
};

export default Carrinho;

import React, { useContext, useEffect, useRef, useState } from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { ReduxProps } from '../../Redux'
import { CartProps, removeCart } from '../../Redux/Cart'
import { UserProps } from '../../Redux/User'

import { 
  BreadCrumbs,
  Container,
  MainView,
  ProductColumn,
  UserColumn,
  PaymentColumn,
  Content1,
  Content2,
  Content3,
  Product,
} from './styles';

const FinalizarCarrinho = () => {
  const [prodInfo, setProdInfo] = useState([])

  const [ids, setIds] = useState([])

  const dispatch = useDispatch()
  
  const cartItems = useSelector((redux: ReduxProps) => redux.cart)
  const userInfo = useSelector((redux: ReduxProps) => redux.user as UserProps)

  if(cartItems.length == 0) {
    window.location.href = '/'
  }
  
  const valorRef = useRef<HTMLParagraphElement>(null)
  const [valorTotal, setValorTotal] = useState(0)
  var total = 0

  useEffect(() => {
    valorRef.current.textContent = 'Total: '+total.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    setValorTotal(total)
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
          <span><p>identificação</p></span>
          <span><p>pagamento</p></span>
        </BreadCrumbs>
        <MainView>
          <ProductColumn>
            <Content1>
              <p>REsumo da compra</p>
              <div className="cartItemList">
                {
                  cartItems.map((item: CartProps) => (
                    <Product>
                      <span>
                        <div className="imgWrapper">
                          <img src={item.image} alt=""/>
                        </div>
                      </span>
                      <span>
                        <span>
                          {item.name}<br />
                          cor: {item.color}<br />
                          tamanho: {item.size}<br />
                          quantidade: {item.amount}<br />
                          {item.price.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}
                        </span>
                      </span>
                    </Product>
                  ))
                }
              </div>
              <span>
                <p>{cartItems.length} Itens</p>
                <p 
                  ref={valorRef}>Total: {cartItems.map((item: CartProps) => {
                    somaTotal(item.price, item.amount)
                    return <div />
                  })}</p>
              </span>
            </Content1>
          </ProductColumn>
          <UserColumn>
            <Content2>
              <p>Você:</p>
              <div className="avatarContainer">
                <div className="avatarWrapper">
                  <img src={userInfo.avatar} alt=""/>
                </div>
                <span>
                  {userInfo.nome} <br/>
                  {userInfo.email} <br/>
                  {userInfo.cpf} 
                </span>
              </div>
              <div>
                <p>endereço de entrega:</p>  
                {userInfo.cep} {userInfo.endereco}, {userInfo.numero} <br/>
                {userInfo.cidade}-{userInfo.estado} 
              </div>
              <div>
                <p>tempo estimado:</p> 
                5 dias para entrega <br/>
                sedex <br/>
                frete grátis
              </div>
            </Content2>
          </UserColumn>
          <PaymentColumn>
            <Content3>
              <span>Pagamento</span>
              <p>cartão de crédito</p>
              <div>
                <label htmlFor="cartao">Número do cartão</label>
                <input type="text" id="cartao"/>
              </div>
              <div>
                <label htmlFor="nome">Nome impresso no cartão</label>
                <input type="text" id="nome"/>
              </div>
              <div>
                <span>
                  <label htmlFor="validade">Validade do cartão</label>
                  <span>
                    <select name="mes" id="mes">
                      <option defaultChecked value="">Mês</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                    </select>
                    <select name="mes" id="mes">
                      <option defaultChecked value="">ano</option>
                      <option value="2020">2020</option>
                      <option value="2021">2021</option>
                      <option value="2022">2022</option>
                      <option value="2023">2023</option>
                      <option value="2024">2024</option>
                      <option value="2025">2025</option>
                      <option value="2026">2026</option>
                      <option value="2027">2027</option>
                      <option value="2028">2028</option>
                      <option value="2029">2029</option>
                    </select>
                  </span>
                </span>
                <span>
                  <label htmlFor="cvv">cvv</label>
                  <input type="text"/>
                </span>
              </div>
              <div>
                <span>parcelamento</span>
                <select>
                  <option value="1X">1x {total.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</option>
                  <option value="1x">2x {(total/2).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</option>
                  <option value="1x">3x {(total/3).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</option>
                  <option value="1x">4x {(total/4).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</option>
                  <option value="1x">5x {(total/5).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</option>
                </select>
              </div>
              <button>Comprar</button>
            </Content3>
          </PaymentColumn>
        </MainView>
      </Container>
      <Footer />
    </>
  );
};

export default FinalizarCarrinho;

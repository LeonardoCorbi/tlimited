import React, { useEffect, useRef, useState } from 'react';
import axios from 'axios'

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
import Recommended from '../../components/Recommended';

interface MatchProps {
  match: {
    params: {
      query: any
    }
  }
}

const Pesquisa: React.FC<MatchProps> = ({match}) => {
  const [orderSelected, setOrderSelected] = useState('preferidos')

  //! BUSCAR PRODUTOS
  const [update, setUpdate] = useState(0)
  
  const [brand] = useState([])
  const [size, setSize] = useState('')
  const [color] = useState([])
  const [order, setOrder] = useState('ORDER BY itens.flashlikes DESC')
  
  const nikeRef = useRef<HTMLInputElement>(null)
  const adidasRef = useRef<HTMLInputElement>(null)
  const newBalanceRef = useRef<HTMLInputElement>(null)
  const reebokRef = useRef<HTMLInputElement>(null)
  const pumaRef = useRef<HTMLInputElement>(null)
  const underArmorRef = useRef<HTMLInputElement>(null)

  const greenRef = useRef<HTMLInputElement>(null)
  const redRef = useRef<HTMLInputElement>(null)
  const orangeRef = useRef<HTMLInputElement>(null)
  const yellowRef = useRef<HTMLInputElement>(null)
  const purpleRef = useRef<HTMLInputElement>(null)
  const blackRef = useRef<HTMLInputElement>(null)
  
  const marcaAdd = (el) => {
    brand.push(el.target.value)
    setUpdate(update + 1)
  }
  const marcaRemove = (el) => {
    brand.splice(brand.indexOf(el.target.value), 1)
    setUpdate(update - 1)
  }
  
  const colorAdd = (el) => {
    color.push(el.target.value)
    setUpdate(update + 1)
  }
  const colorRemove = (el) => {
    color.splice(color.indexOf(el.target.value), 1)
    setUpdate(update - 1)
  }
  
  const [products, setProducts] = useState([])
  useEffect(() => {
    const getProductsFD = new FormData()
    getProductsFD.append('string', match.params.query)
    getProductsFD.append('brand', brand.toString())
    getProductsFD.append('size', size)
    getProductsFD.append('color', color.toString())
    getProductsFD.append('order', order)
    
    axios.post('https://leonardocorbi.dev/php/getSearch.php', getProductsFD)
      .then(res => setProducts(res.data))
      .catch(err => console.log(err))
  }, [size, update, order])
  
  
  return (
    <Container>
      <Header todos/>
      <Content>
        <LeftColumn>

          <OrderBy>
            
            <p>ORDEM</p> 

            <ul>
              <li 
                className={orderSelected === 'preferidos' ? 'active' : 'deactivated'} 
                onClick={() => {
                  setOrder('ORDER BY itens.flashlikes DESC')
                  setOrderSelected('preferidos')
                }}
              >
                PREFERIDOS                
              </li>
              <li 
                className={orderSelected === 'promocoes' ? 'active' : 'deactivated'} 
                onClick={() => {
                  setOrder('ORDER BY itens.promocao DESC')
                  setOrderSelected('promocoes')
                }}
              >
                PROMOÇÕES                
              </li>
              <li 
                className={orderSelected === 'lancamentos' ? 'active' : 'deactivated'} 
                onClick={() => {
                  setOrder('ORDER BY itens.id DESC')
                  setOrderSelected('lancamentos')
                }}
              >
                LANÇAMENTO                
              </li>
              <li 
                className={orderSelected === 'maior preco' ? 'active' : 'deactivated'} 
                onClick={() => {
                  setOrder('ORDER BY itens.valor DESC')
                  setOrderSelected('maior preco')
                }}
              >
                MAIOR PREÇO                
              </li>
              <li 
                className={orderSelected === 'menor preco' ? 'active' : 'deactivated'} 
                onClick={() => {
                  setOrder('ORDER BY itens.valor ASC')
                  setOrderSelected('menor preco')
                }}
              >
                MENOR PREÇO                
              </li>
            </ul>

          </OrderBy>

          <Brands>

            <p>MARCAS</p>
            
            <div>

              <span>

                <input
                  onClick={el => nikeRef.current.checked ? marcaAdd(el): marcaRemove(el)}
                  type="checkbox" 
                  name="brands" 
                  id="brands"
                  value="Nike"
                  ref={nikeRef}
               />
                <img src={require('../../assets/icons/nikeIcon.svg')} alt="NikeIcon"/>

              </span>

              <span>

                <input
                  onClick={el => adidasRef.current.checked ? marcaAdd(el): marcaRemove(el)}
                  type="checkbox" 
                  name="brands" 
                  id="brands"
                  value="Adidas"
                  ref={adidasRef}
                />
                <img src={require('../../assets/icons/adidasIcon.png')} alt="adidasIcon"/>

              </span>

              <span>

                <input
                  onClick={el => newBalanceRef.current.checked ? marcaAdd(el): marcaRemove(el)}
                  type="checkbox" 
                  name="brands" 
                  id="brands"
                  value="New Balance"
                  ref={newBalanceRef}
                />
                <img src={require('../../assets/icons/newBalanceIcon.png')} alt="newBalanceIcon"/>

              </span>

              <span>

                <input
                  onClick={el => reebokRef.current.checked ? marcaAdd(el): marcaRemove(el)}
                  type="checkbox" 
                  name="brands" 
                  id="brands"
                  value="Reebok"
                  ref={reebokRef}
                />
                <img src={require('../../assets/icons/reebokIcon.png')} alt="reebokIcon"/>

              </span>

              <span>

                <input
                  onClick={el => pumaRef.current.checked ? marcaAdd(el): marcaRemove(el)}
                  type="checkbox" 
                  name="brands" 
                  id="brands"
                  value="Puma"
                  ref={pumaRef}
                />
                <img src={require('../../assets/icons/pumaIcon.png')} alt="pumaIcon"/>

              </span>

              <span>

                <input
                  onClick={el => underArmorRef.current.checked ? marcaAdd(el): marcaRemove(el)}
                  type="checkbox" 
                  name="brands" 
                  id="brands"
                  value="Under Armor"
                  ref={underArmorRef}
                />
                <img src={require('../../assets/icons/underArmorIcon.png')} alt="underArmorIcon"/>

              </span>
              
            </div>

          </Brands>

          <SizeSelector>

            <p>TAMANHO</p>

            <div>

              <span>

                <input
                  onChange={el => setSize(el.target.value)} 
                  type="radio" 
                  name="size" 
                  id="size" 
                  value="36"
                />
                <p>36</p>
                
              </span>

              <span>

                <input
                  onChange={el => setSize(el.target.value)} 
                  type="radio" 
                  name="size" 
                  id="size" 
                  value="37"
                />
                <p>37</p>
                
              </span>

              <span>

                <input
                  onChange={el => setSize(el.target.value)} 
                  type="radio" 
                  name="size" 
                  id="size" 
                  value="38"
                />
                <p>38</p>
                
              </span>

              <span>

                <input
                  onChange={el => setSize(el.target.value)} 
                  type="radio" 
                  name="size" 
                  id="size" 
                  value="39"
                />
                <p>39</p>
                
              </span>

              <span>

                <input
                  onChange={el => setSize(el.target.value)} 
                  type="radio" 
                  name="size" 
                  id="size" 
                  value="40"
                />
                <p>40</p>
                
              </span>

              <span>

                <input
                  onChange={el => setSize(el.target.value)} 
                  type="radio" 
                  name="size" 
                  id="size" 
                  value="41"
                />
                <p>41</p>
                
              </span>

              <span>

                <input
                  onChange={el => setSize(el.target.value)} 
                  type="radio" 
                  name="size" 
                  id="size" 
                  value="42"
                />
                <p>42</p>
                
              </span>

              <span>

                <input
                  onChange={el => setSize(el.target.value)} 
                  type="radio" 
                  name="size" 
                  id="size" 
                  value="43"
                />
                <p>43</p>
                
              </span>

              <span>

                <input
                  onChange={el => setSize(el.target.value)} 
                  type="radio" 
                  name="size" 
                  id="size" 
                  value="44"
                />
                <p>44</p>
                
              </span>

            </div>

          </SizeSelector>

          <ColorSelector>

            <p>CORES</p>

            <div>

              <input
                value="verde" 
                type="checkbox" 
                className="green"
                onClick={el => greenRef.current.checked ? colorAdd(el) : colorRemove(el)} 
                ref={greenRef}
              />
              <input
                value="vermelho" 
                type="checkbox" 
                className="red"
                onClick={el => redRef.current.checked ? colorAdd(el) : colorRemove(el)} 
                ref={redRef}
              />
              <input
                value="laranja" 
                type="checkbox" 
                className="orange"
                onClick={el => orangeRef.current.checked ? colorAdd(el) : colorRemove(el)} 
                ref={orangeRef}
              />
              <input
                value="amarelo" 
                type="checkbox" 
                className="yellow"
                onClick={el => yellowRef.current.checked ? colorAdd(el) : colorRemove(el)} 
                ref={yellowRef}
              />
              <input
                value="roxo" 
                type="checkbox" 
                className="purple"
                onClick={el => purpleRef.current.checked ? colorAdd(el) : colorRemove(el)} 
                ref={purpleRef}
              />
              <input
                value="preto" 
                type="checkbox" 
                className="black"
                onClick={el => blackRef.current.checked ? colorAdd(el) : colorRemove(el)} 
                ref={blackRef}
              />
            
            </div>
            
          </ColorSelector>

        </LeftColumn>

        <Products>
          {
            products.length > 0
              ? (
                  products.map(prod => (
                    <Product 
                      id={prod.id}
                      flashNumber={prod.flashlikes}
                      imageUrl={prod.imagem}
                      name={prod.nome}
                      price={prod.valor}
                      key={prod.id}
                    />
                  ))
              )
              : <p>Não tem</p>
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

export default Pesquisa;

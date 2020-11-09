import React, { useState, useRef, useEffect } from 'react';
import axios from 'axios'
import Carousel from 'react-elastic-carousel'

import { 
  Container, 
  Content,
  AboutPlace,
  DesignerInfo,
  ShoesImagePlace,
  FlashContainer,
  FlashIcon,
  OrderFunctionPlace,
  OrderFormWrapper,
  NameContainer,
  SizeContainer,
  PriceContainer,
  AmountContainer,
  BuyButton,
  HistPlace,
  Gallery,
} from './styles';

import flashIcon from '../../assets/icons/flashIcon.svg'

import Header from '../../components/Header';
import Recommended from '../../components/Recommended';
import Footer from '../../components/Footer';

interface matchProps {
  match: {
    params: {
      id: any
    }
  }
}

const Item: React.FC<matchProps> = ({ match }) => {
  const [amount, setAmount] = useState(1)

  const [productInfo, setProductInfo] = useState([])
  const [productImages, setProductImages] = useState([])
  const [productUnidades, setProductUnidades] = useState([])

  useEffect(() => {
    const productFD = new FormData()
    productFD.append('id', match.params.id)

    axios.post('https://leonardocorbi.dev/php/getEspecificProductInfo.php', productFD)
      .then(res => setProductInfo(res.data))
      .catch(err => console.log(err))
    
    axios.post('https://leonardocorbi.dev/php/getEspecificProductImages.php', productFD)
      .then(res => setProductImages(res.data))
      .catch(err => console.log(err))
    
    axios.post('https://leonardocorbi.dev/php/getEspecificProductUnidades.php', productFD)
      .then(res => setProductUnidades(res.data))
      .catch(err => console.log(err))
  }, [match.params.id])

  const handleRemoveBtn = () => {
    if(amount !== 1 ){
      setAmount(amount - 1)
    }
  }

  function handleAddBtn() {
    setAmount(amount + 1)
  }

  const [tamanhoSelected, setTamanhoSelected] = useState(0)

  return (
    <Container>

      <Header />

      <Content>

        <AboutPlace>
        
          <h2>história e material</h2>
        
          <p>{productInfo.map(prod => prod.descricao)}</p>
        
          <DesignerInfo>

            <span>
              <img src={`${productInfo.map(prod => prod.designer_imagem)}`} alt="img"/>
            </span>

            <div>
              <h2>{productInfo.map(prod => prod.designer_nome)}</h2>
              <p>{productInfo.map(prod => prod.designer_funcao)}</p>
            </div>

          </DesignerInfo>
        </AboutPlace>

        <ShoesImagePlace>

          <FlashContainer>

            <span>{productInfo.map(prod => prod.flashlikes)}</span>
            <span> flaslikes </span>
            <FlashIcon 
            width="28.781" 
            height="40" 
            >
              <path d="M24.609,16.484h-9.7L23.282,1.753A1.171,1.171,0,0,0,22.265,0H8.2A1.171,1.171,0,0,0,7.091.8L.06,21.972a1.171,1.171,0,0,0,1.111,1.543h9.942L4.782,38.367a1.171,1.171,0,0,0,1.952,1.24l18.75-21.172a1.172,1.172,0,0,0-.876-1.95Zm0,0"/>
            </FlashIcon>

          </FlashContainer>

          <Gallery>

            <Carousel showArrows={false}>
            {
              productImages.map(imageURL => (
                <img src={`${imageURL}`} alt={`${productInfo.map(prod => prod.nome)}`}/>
              ))
            }
            </Carousel>

          </Gallery>

        </ShoesImagePlace>

        <OrderFunctionPlace>

          <OrderFormWrapper>
            
            <NameContainer>
              <h1>{productInfo.map(prod => prod.nome)}</h1>
              <h2>EDIÇÃO LIMITADA</h2>
            </NameContainer>
            
            <SizeContainer>

              <p>TAMANHO</p>

              <div className="organizer">

                {
                  productUnidades.map(prod => (
                    <div className="radioWrapper">

                      <input 
                        type="radio" 
                        name="size" 
                        onFocus={el => {
                          setTamanhoSelected(Number(el.target.value))
                          setAmount(1)
                        }}
                        value={prod.tamanho} />
                      <span>{prod.tamanho}</span>

                    </div>
                  ))
                }

              </div>
              
            </SizeContainer>

            <PriceContainer>
              <h1>{Number(productInfo.map(prod => prod.valor)).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</h1>
              <p>ou 5x de {(Number(productInfo.map(prod => prod.valor)) / 5).toFixed(2)}</p>
              <p>FRETE GRÁTIS</p>
            </PriceContainer>

            <AmountContainer>

              <div>

                <span onClick={handleRemoveBtn}>
                  <svg>
                    <line x1="0" x2="15" y1="7" y2="7" />                  
                  </svg>
                </span>
                <p>{amount}</p>
                <span onClick={() => !tamanhoSelected ? undefined : amount < (productUnidades.find(prod => prod.tamanho == tamanhoSelected).quantidade) ? handleAddBtn() : undefined }>
                  <svg>
                    <line x1="0" y1="8" x2="16" y2="8" />                  
                    <line x1="8" y1="16" x2="8" y2="0" />                  
                  </svg>
                </span>

              </div>

              <p className="unities">
                {
                  tamanhoSelected
                    ? (
                      <>
                        SOMENTE {productUnidades.map(prod => prod.tamanho == tamanhoSelected ? prod.quantidade : undefined)} UNIDADES
                      </>
                    )
                    : undefined               
                }
              </p>
            </AmountContainer>

            <BuyButton type="submit">
              <span>COMPRAR</span>
              <img src={flashIcon} alt="flashIcon"/>
            </BuyButton>

          </OrderFormWrapper>
          
        </OrderFunctionPlace>



        <HistPlace>

        </HistPlace>

      </Content>

      <Recommended />
      
      <Footer />

    </Container>
  );
};

export default Item;

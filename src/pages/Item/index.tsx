import React, { useState, useRef, useEffect } from 'react';

import { 
  Container, 
  Content,
  AboutPlace,
  DesignerInfo,
  ShoesImagePlace,
  FlashContainer,
  FlashIcon,
  Indicator,
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

const Item: React.FC = () => {
  const [amount, setAmount] = useState(1)
  const galleryRef = useRef<HTMLDivElement>(null)

  const firstImgCheckRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    firstImgCheckRef.current.focus()
  }, [])

  const handleRemoveBtn = () => {
    if(amount !== 1){
      setAmount(amount - 1)
    }
  }

  const handleAddBtn = () => {
    setAmount(amount + 1)
  }

  const handleImg1 = () => {
    galleryRef.current.scrollTo({
      left: 0, 
      behavior:"smooth"
    })
  }

  const handleImg2 = () => {
    galleryRef.current.scrollTo({
      left: 1300, 
      behavior:"smooth"
    })
  }

  const handleImg3 = () => {
    galleryRef.current.scrollTo({
      left: 2200, 
      behavior:"smooth"
    })
  }

  const handleImg4 = () => {
    galleryRef.current.scrollTo({
      left: 5000, 
      behavior:"smooth"
    })
  }

  return (
    <Container>

      <Header />

      <Content>

        <AboutPlace>
        
          <h2>história e material</h2>
        
          <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet.</p>
        
          <DesignerInfo>

            <span>
              <img src={require('../../assets/designer1.png')} alt="img"/>
            </span>

            <div>
              <h2>MAIA VOLPATO</h2>
              <p>NIKE PRODUCT DESIGNER</p>
            </div>

          </DesignerInfo>
        </AboutPlace>

        <ShoesImagePlace>

          <FlashContainer>

            <span>220</span>
            <span> flaslikes </span>
            <FlashIcon 
            width="28.781" 
            height="40" 
            >
              <path d="M24.609,16.484h-9.7L23.282,1.753A1.171,1.171,0,0,0,22.265,0H8.2A1.171,1.171,0,0,0,7.091.8L.06,21.972a1.171,1.171,0,0,0,1.111,1.543h9.942L4.782,38.367a1.171,1.171,0,0,0,1.952,1.24l18.75-21.172a1.172,1.172,0,0,0-.876-1.95Zm0,0"/>
            </FlashIcon>

          </FlashContainer>

          <Gallery>

            <div ref={galleryRef}>

              <img src={require('../../assets/shoe1.png')} alt="shoe"/>
              <img src={require('../../assets/shoe2.png')} alt="shoe"/>
              <img src={require('../../assets/shoe3.png')} alt="shoe"/>
              <img src={require('../../assets/shoe4.png')} alt="shoe"/>

            </div>

          </Gallery>

          <Indicator>

            <input ref={firstImgCheckRef} onFocus={handleImg1} type="radio" name="radio" id="radio"/>

            <input onFocus={handleImg2} type="radio" name="radio" id="radio"/>

            <input onFocus={handleImg3} type="radio" name="radio" id="radio"/>

            <input onFocus={handleImg4} type="radio" name="radio" id="radio"/>

          </Indicator>

        </ShoesImagePlace>

        <OrderFunctionPlace>

          <OrderFormWrapper>
            
            <NameContainer>
              <h1>NIKE ZOOM</h1>
              <h2>EDIÇÃO LIMITADA</h2>
            </NameContainer>
            
            <SizeContainer>

              <p>TAMANHO</p>

              <div className="organizer">

                <div className="radioWrapper">

                  <input type="radio" name="size" value="36" />
                  <span>36</span>

                </div>

                <div className="radioWrapper">

                  <input type="radio" name="size" value="37"/>
                  <span>37</span>

                </div>

                <div className="radioWrapper">

                  <input type="radio" name="size" value="38"/>
                  <span>38</span>

                </div>

                <div className="radioWrapper">

                  <input type="radio" name="size" value="39"/>
                  <span>39</span>

                </div>

                <div className="radioWrapper">

                  <input type="radio" name="size" value="40"/>
                  <span>40</span>

                </div>

              </div>
              
            </SizeContainer>

            <PriceContainer>
              <h1>R$975,00</h1>
              <p>ou 5x de 195,00</p>
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
                <span onClick={handleAddBtn}>
                  <svg>
                    <line x1="0" y1="8" x2="16" y2="8" />                  
                    <line x1="8" y1="16" x2="8" y2="0" />                  
                  </svg>
                </span>

              </div>

              <p className="unities">SOMENTE 6 UNIDADES</p>
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

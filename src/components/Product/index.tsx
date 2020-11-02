import React, { useState } from 'react'
import path from 'path'

import { motion } from 'framer-motion'

import { 
  Container, 
  FlashIcon,
  AddCart,
} from './styles';

import { Link } from 'react-router-dom';

interface ShoesProps {
  id: number
  flashNumber: number
  imageUrl: string
  name: string
  price: string
}

const Product: React.FC<ShoesProps> = ({
  id,
  flashNumber,
  imageUrl,
  name,
  price
}) => {
  const [active, setActive] = useState(false)

  const handleTouchFlashIcon = () => {
    setActive(!active)
  }

  function numberSelector(event, info) {
    info.point.x = -356
    info.point.y = -9
    info.point.opacity = 1
  }

  const [isOpen, setIsOpen] = useState(false)

  const variant = {
    open: { 
      x: -2,
      y: -7,
      opacity: 1
    },
    closed: { 
      x: 228,
      y: -7,
      opacity: 0
    }
  }

  return (
    <Container>
      
      <div className="flashContainer">

        <div id="values">
          <input type="number" name="itemID" id="itemID" value={id}/>
        </div>

        <span>{active ? flashNumber + 1 : flashNumber}</span>

        <FlashIcon
        onClick={handleTouchFlashIcon} 
        width="28.781" 
        height="40" 
        fill={active ? '#3DFB03' : 'white'}
        viewBox="0 0 27.781 42">
          <path d="M24.609,16.484h-9.7L23.282,1.753A1.171,1.171,0,0,0,22.265,0H8.2A1.171,1.171,0,0,0,7.091.8L.06,21.972a1.171,1.171,0,0,0,1.111,1.543h9.942L4.782,38.367a1.171,1.171,0,0,0,1.952,1.24l18.75-21.172a1.172,1.172,0,0,0-.876-1.95Zm0,0"/>
        </FlashIcon>

      </div>
      
      <Link to={`/item/${id}`}>
        <img src={`${imageUrl}`} alt={`Imagem ${name}`}/>
        {/* <img src={path.resolve(__dirname, '..', '..', 'assets', 'foot2.png')} alt={`Imagem ${name}`}/> */}
      </Link>
      
      <Link to={`/item/${id}`}>
        <p>{name}</p>
      </Link>
      <span className="order">

        <span>R${price}</span>

        <div onClick={() => setIsOpen(!isOpen)}>
          <AddCart 
            viewBox="0 0 24 24" 
            onMouseOver={() => console.log('oi')}
          >
            <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
          </AddCart>
        </div>


        <div>
          <motion.div
            animate={isOpen ? 'open' : 'closed'}
            variants={variant}
          >

          </motion.div>          
        </div>

      </span>
    
    </Container>
  );
};

export default Product;

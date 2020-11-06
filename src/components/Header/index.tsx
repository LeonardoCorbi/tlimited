import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom'

import flashIcon from '../../assets/icons/flashIcon.svg'

import { 
  Container,
  MenuContainer,
  SearchIcon,
  // FlashIcon,
  CartIcon,
  ProfileIcon,
  SearchContainer,
} from './styles'

interface PageColorProps {
  todos?: boolean
  tenis?: boolean
  chuteiras?: boolean
  sneakers?: boolean
}

const Header: React.FC<PageColorProps> = ({
  todos,
  tenis,
  chuteiras,
  sneakers
}) => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const [visible, setVisible] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  
  function handleSearchBtn() {
    if(inputRef.current.value.length > 0){

    }else{
      inputRef.current.focus()
    }
  }
  
  return (
    <Container>
      <MenuContainer>
        <h1><Link to="/">tlimited</Link></h1>

        <nav>
          <ul>
            <li>
              <Link to="/">
                <span 
                  style={{'color': todos ? '#3DFB03' : 'black' }}>
                  TODOS
                </span>
              </Link>
            </li>
            <li>
              <Link to="/tenis">
                <span 
                  style={{'color': tenis ? '#3DFB03' : 'black' }}>
                  TÊNIS
                </span>
              </Link>
            </li>
            <li>
              <Link to="/chuteiras">
                <span 
                  style={{'color': chuteiras ? '#3DFB03' : 'black' }}>
                    CHUTEIRAS
                </span>
              </Link>
            </li>
            <li>
              <Link to="/sneakers">
                <span 
                  style={{'color': sneakers ? '#3DFB03' : 'black' }}>
                  SNEAKERS
                </span>
              </Link>
            </li>
          </ul>
        </nav>

        <div>

          <SearchContainer>
            <input 
              ref={inputRef} 
              onBlur={() => setVisible(false)} 
              onFocus={() => setVisible(true)} 
              type="text" name="search" id="search"
            />
            <SearchIcon active={visible} onClick={handleSearchBtn}/>
          </SearchContainer>
          <img height="40px" src={flashIcon} alt="flashIcon"/>
          <CartIcon />
          <Link to="/login">
            <ProfileIcon />
          </Link>

        </div>
      </MenuContainer>
    </Container>
  );
};

export default Header;

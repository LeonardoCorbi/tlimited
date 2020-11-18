import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom'
import { ReduxProps } from '../../Redux'
import { useSelector } from 'react-redux'
import { UserProps } from '../../Redux/User'

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
  const [search, setSearch] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  
  function handleSearchBtn() {
    if(inputRef.current.value.length > 0){
      window.location.href = `/pesquisa/${search}`
    }else{
      inputRef.current.focus()
    }
  }

  const busca = (key: string) => {
    if(key === 'Enter') {
      window.location.href = `/pesquisa/${search}`
    }
  }

  const cartItem = useSelector((redux: ReduxProps) => redux.cart)
  const userInfo = useSelector((redux: ReduxProps) => redux.user as UserProps)
 
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
          </ul>
        </nav>

        <div>

          <SearchContainer>
            <input 
              ref={inputRef} 
              onBlur={() => setVisible(false)} 
              onFocus={() => setVisible(true)} 
              onChange={el => setSearch(el.target.value)}
              onKeyDown={key => busca(key.key)}
              type="text" name="search" id="search"
            />
            <SearchIcon active={visible} onClick={handleSearchBtn}/>
          </SearchContainer>
          <img height="40px" src={flashIcon} alt="flashIcon"/>
          <Link to="/carrinho">
            <CartIcon />
            {
              cartItem.length > 0
                ? (
                  <div className="floatItemsCart">
                    {cartItem.length}
                  </div>
                )
                : undefined
            }
          </Link>
          <div>
            {
              userInfo.avatar
                ? <img className="avatarImg" src={`${userInfo.avatar}`} alt=""/>
                : <Link to="/login"><ProfileIcon /></Link>
            }
          </div>

        </div>
      </MenuContainer>
    </Container>
  );
};

export default Header;

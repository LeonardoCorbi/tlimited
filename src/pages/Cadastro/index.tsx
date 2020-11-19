import React, { useEffect, useState, ChangeEvent } from 'react';
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { setLogin } from '../../Redux/Login'
import { setUser } from '../../Redux/User'

import { 
  Container,
  Column1,
  Column2,
  Column3,
  Content,
  ModalError,
  BlackBackgroud, 
} from './styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

interface cepProps {
  logradouro: string
  localidade: string
  uf: string
}

const Cadastro: React.FC = () => {
  const [error, setError] = useState(false)
  
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [cpf, setCpf] = useState('')
  const [phone, setPhone] = useState('')

  const [cep, setCep] = useState('')
  const [street, setStreet] = useState('')
  const [number, setNumber] = useState('')
  const [selectedUf, setSelectedUf] = useState('')
  const [selectedCity, setSelectedCity] = useState('')
  const [uf, setUf] = useState([])
  const [city, setCity] = useState([])

  const [password, setPassword] = useState('')
  const [avatar, setAvatar] = useState([])
  const [preview, setPreview] = useState('')

  const dispatch = useDispatch()

  
  useEffect(() => {
    axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados/')
    .then(el => setUf(el.data))
  }, [])
  
  useEffect(() => {
    axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`)
    .then(el => setCity(el.data))
  }, [selectedUf])
  
  const handleSelectUf = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value
    setSelectedUf(value)
  }
  
  const handleSelectCity = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value
    setSelectedCity(value)
  }

  function handleInputImage(el) {
    setAvatar(el.target.files[0])
    setPreview(el.target.files[0])
  }
  
  const [camposInvalidos, setCamposInvalidos] = useState([])
  const handleSubmit = async evt => {
    evt.preventDefault()


    if(!name) camposInvalidos.push(' nome')
    if(!email) camposInvalidos.push(' email')
    if(!Number(cpf) && typeof(Number(cpf)) == typeof(1)) camposInvalidos.push(' cpf')
    if(!Number(phone) && typeof(Number(phone)) == typeof(1)) camposInvalidos.push(' celular')
    if(!Number(cep) && typeof(Number(cep)) == typeof(1)) camposInvalidos.push(' cep')
    if(!street) camposInvalidos.push(' rua/avenida')
    if(!number) camposInvalidos.push(' número')
    if(!selectedCity) camposInvalidos.push(' cidade')
    if(!selectedUf) camposInvalidos.push(' uf')
    if(!password) camposInvalidos.push(' senha')
    if(!avatar) camposInvalidos.push(' imagem')
    console.log(camposInvalidos)

    const userDataFD = new FormData()
    userDataFD.append('name', name)
    userDataFD.append('email', email)
    userDataFD.append('cpf', cpf)
    userDataFD.append('phone', phone)
    userDataFD.append('cep', cep)
    userDataFD.append('street', street)
    userDataFD.append('number', number)
    userDataFD.append('selectedCity', selectedCity)
    userDataFD.append('selectedUf', selectedUf)
    userDataFD.append('password', password)
    userDataFD.append('avatar', avatar as any)

    if(camposInvalidos.length > 0) {
      setError(true)
      console.log('fail')
    }else {
      console.log('entrou')
      const loginReq = await axios.post('https://leonardocorbi.dev/php/postUserRegister.php', userDataFD)
      
      if(typeof loginReq.data === 'object') {
        console.debug('ok', loginReq.data)
        dispatch(setUser(loginReq.data[0]))
        dispatch(setLogin(true))
        setTimeout(() => {
          window.history.back()
        }, 100)
      }else {
        alert('Algo deu errado com a gravação do usuário no banco de dados.')
      }
    }

  }

  return (
    <Container>
      <Header />
      <BlackBackgroud className={error ? 'show' : 'hide'}/>
      <ModalError className={error ? 'active' : 'deactivated'}>
        <div className="content">
          <span onClick={() => {
            setError(false)
            setCamposInvalidos([])
          }}>X</span>
          <p>
            Os campos{camposInvalidos.map((campo, pos) => {
              if(pos < 1) {
                return campo
              }else {
                return ',' + campo
              }
            })} não estão preenchidos corretamente.
          </p>
        </div>
      </ModalError>
      <Content>

        <h1>faça login ou crie sua conta</h1>

        <form>
          
          <p>crie sua conta:</p>
          
          <div>
            <Column1>

              <label htmlFor="name">nome:</label>
              <input type="text" name="name" id="name"
                onChange={el => setName(el.target.value)}
              />

              <label htmlFor="email">email:</label>
              <input type="email" name="email" id="email"
                onChange={el => setEmail(el.target.value)}
              />

              <label htmlFor="cpf">cpf:</label>
              <input type="text" name="cpf" id="cpf"
                onChange={el => setCpf(el.target.value)}
              />

              <label htmlFor="phone">celular:</label>
              <input type="tel" name="phone" id="phone"
                onChange={el => setPhone(el.target.value)}
              />

            </Column1>
            <Column2>

              <label htmlFor="cep">cep:</label>
              <input type="text" name="cep" id="cep"
                onChange={el => setCep(el.target.value)}
                />

              <label htmlFor="street">rua/avenida:</label>
              <input type="text" name="street" id="street" value={street}
                onChange={el => setStreet(el.target.value)}
                />

              <span>
                
                <div>
                  <label htmlFor="number">número:</label>
                  <input type="number" name="number" id="number"
                    onChange={el => setNumber(el.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="uf">estado:</label>
                  <select name="uf" id="uf" value={selectedUf} onChange={handleSelectUf}>
                    {
                      uf.map(item => (
                        <option key={item.sigla} value={item.sigla}>{item.sigla}</option> 
                      ))
                    }
                  </select>
                  <p>▼</p>              
                </div>

              </span>

              <div>
                <label htmlFor="city">cidade:</label>
                <select name="city" id="city" value={city} onChange={handleSelectCity}>
                  {
                    city.map(item => (
                      <option key={item.nome} value={item.nome}>{item.nome}</option>
                    ))
                  }
                </select>
                <p>▼</p>
              </div>


              
            </Column2>
            <Column3>

              <label htmlFor="password">Senha:</label>
              <input type="password" name="password" id="password"
                onChange={el => setPassword(el.target.value)}
              />

              <div>
                <span className="imgContainer">
                  <span className="imageWrapper">
                    <img src={preview ? URL.createObjectURL(preview) : 'https://thumbs.dreamstime.com/b/opte-pelo-avatar-placeholder-da-foto-%C3%ADcone-do-perfil-124557887.jpg'} alt="avatar" />
                  </span>
                </span>
                <span>
                  <p>sua foto</p>
                  1x1
                  <label className="avatarbtn" htmlFor="avatar">Selecione sua foto</label>
                  <input className="avatar" type="file" name="avatar" id="avatar"
                    onChange={el => handleInputImage(el)}
                  />
                </span>
              </div>              
              
              <label htmlFor="submitBtn">tudo pronto?</label>
              <button id="submitBtn" onClick={handleSubmit}>
                Criar conta
              </button>

            </Column3>
          </div>

        </form>
        
      </Content>
      <Footer />
    </Container>
  );
};

export default Cadastro;

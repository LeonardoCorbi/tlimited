import React, { useEffect, useState, ChangeEvent } from 'react';
import axios from 'axios'

import { 
  Container,
  Column1,
  Column2,
  Column3,
  Content, 
} from './styles';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

interface cepProps {
  logradouro: string
  localidade: string
  uf: string
}

const Cadastro: React.FC = () => {
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
  const [avatar, setAvatar] = useState('')

  
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
  const handleAvatar = el => {
    setAvatar(el.target.files[0])
    console.log(avatar)
  }
  
  const handleSubmit = evt => {
    evt.preventDefault()

    const camposInvalidos = []

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

    const userData = new FormData()
    userData.append('name', name)
    userData.append('email', email)
    userData.append('cpf', cpf)
    userData.append('phone', phone)
    userData.append('cep', cep)
    userData.append('street', street)
    userData.append('number', number)
    userData.append('selectedCity', selectedCity)
    userData.append('selectedUf', selectedUf)
    userData.append('password', password)
    userData.append('avatar', avatar)

    if(camposInvalidos.length > 0) {
      console.log('fail')
      //! fazer modal
    }else {
      console.log('entrou')
      axios.post('https://leonardocorbi.dev/php/postUserRegister.php')
        .then(res => console.log(res.data))
        .catch(err => console.log(err))
    }
  }

  return (
    <Container>
      <Header />
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
                  <img src={avatar ? URL.createObjectURL(avatar) : 'https://thumbs.dreamstime.com/b/opte-pelo-avatar-placeholder-da-foto-%C3%ADcone-do-perfil-124557887.jpg'} alt="avatar" />
                </span>
                <span>
                  <p>sua foto</p>
                  1x1
                  <label className="avatarbtn" htmlFor="avatar">Selecione sua foto</label>
                  <input className="avatar" type="file" name="avatar" id="avatar"
                    onChange={el => handleAvatar(el)}
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

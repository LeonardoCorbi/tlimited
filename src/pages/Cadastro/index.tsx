import React, { useEffect, useState, ChangeEvent } from 'react';
import axios from 'axios'
import cep from 'cep-promise'

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
  state: string
  city: string
  street: string
}

const Cadastro: React.FC = () => {
  const [uf, setUf] = useState([])
  const [selectedUf, setSelectedUf] = useState('')
  const [cityByCep, setCityByCep] = useState('')
  const [city, setCity] = useState([])
  const [street, setStreet] = useState('')
  // const [cepResult, setCepResult] = useState<cepProps>({})

  useEffect(() => {
    axios.get('https://servicodados.ibge.gov.br/api/v1/localidades/estados/').then(el => setUf(el.data))
  }, [])

  useEffect(() => {
    axios.get(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`).then(el => setCity(el.data))
  }, [selectedUf])

  const handleSelectUf = (event: ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value

    setSelectedUf(value)
  }

  // const handleInputCep = (event: ChangeEvent<HTMLInputElement>) => {
  //   const value = event.target.value

  //   if(value.length == 8) {
  //     cep(value).then(el => setCepResult(el))
  //     console.log(cepResult)
  //     setSelectedUf(cepResult.state)
  //     setCityByCep(cepResult.city)
  //     setStreet(cepResult.street)
  //   }
  // }

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
              <input type="text" name="name" id="name"/>

              <label htmlFor="email">email:</label>
              <input type="email" name="email" id="email"/>

              <label htmlFor="cpf">cpf:</label>
              <input type="text" name="cpf" id="cpf"/>

              <label htmlFor="phone">celular:</label>
              <input type="tel" name="phone" id="phone"/>

            </Column1>
            <Column2>

              <label htmlFor="cep">cep:</label>
              <input type="text" name="cep" id="cep"/>

              <label htmlFor="street">rua/avenida:</label>
              <input type="text" name="street" id="street" value={street}/>

              <span>
                
                <div>
                  <label htmlFor="number">número:</label>
                  <input type="number" name="number" id="number"/>
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
                <select name="city" id="city" value={city || cityByCep}>
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

              <label htmlFor="complement">complemento:</label>
              <input type="text" name="complement" id="complement"/>

              <label htmlFor="password">Senha:</label>
              <input type="password" name="password" id="password"/>
              
              <label htmlFor="avatar">selecione sua foto:</label>
              <input className="avatar" type="file" name="avatar" id="avatar"/>
              
              <label htmlFor="submitBtn">tudo pronto?</label>
              <button type="submit" name="submitBtn" id="submitBtn">
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

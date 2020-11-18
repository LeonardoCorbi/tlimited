const INITIAL_STATE = {}

export interface UserProps {
  id: string
  cpf: string
  nome: string
  email: string
  telefone: string
  cep: string
  endereco: string
  numero: string
  cidade: string
  estado: string
  avatar: string
}

export default function userReducer(user = INITIAL_STATE, action) {
  if(action.type === 'SET_USER') {
    return action.setUser
  }
  return user
}

export const setUser = setUser => {
  return {
    type: 'SET_USER',
    setUser
  }
}
const INITIAL_STATE = false

export default function loginReducer(login = INITIAL_STATE, action) {
  if(action.type === 'SET_LOGIN') {
    return action.setLogin
  }
  return login
}
export const setLogin = setLogin => {
  return {
    type: 'SET_LOGIN',
    setLogin
  }
}
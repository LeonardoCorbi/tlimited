const INITIAL_STATE = []

export interface CartProps {
  name: string
  color: string
  size: number
  amount: number
  image: string
  price: number
}

export default function cartReducer(cart = INITIAL_STATE, action) {
  if(action.type === 'ADD_ITEM') {
    return [...cart, action.addItem]
  }
  if(action.type === 'REMOVE_ITEM') {
    const index = cart.findIndex(item => item.name === action.removeItem)
    return cart.slice(0, index).concat(cart.slice(index + 1))
  }
  return cart
}

export const addCart = addItem => {
  return {
    type: 'ADD_ITEM',
    addItem
  }
}

export const removeCart = removeItem => {
  return {
    type: 'REMOVE_ITEM',
    removeItem
  }
}
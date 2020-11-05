import React from 'react' 
import { Route, BrowserRouter } from 'react-router-dom'

import Todos from './pages/Todos'
import Tenis from './pages/Tenis'
import Chuteiras from './pages/Chuteiras'
import Sneakers from './pages/Sneakers'
import Item from './pages/Item'
import Login from './pages/Login'
import Cadastro from './pages/Cadastro'

const Routes: React.FC = () =>{
  return(
    <BrowserRouter>
      <Route exact path="/" component={Todos} />
      <Route path="/tenis" component={Tenis} />
      <Route path="/chuteiras" component={Chuteiras} />
      <Route path="/sneakers" component={Sneakers} />
      <Route path="/produto/:id" component={Item} />
      <Route path="/login" component={Login} />
      <Route path="/cadastro" component={Cadastro} />
    </BrowserRouter>
  )
}
export default Routes
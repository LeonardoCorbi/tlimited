import React, { createContext, useState } from 'react' 
import { Router, Route, BrowserRouter, HashRouter, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import {redux, persistor} from '../Redux'
import { createBrowserHistory } from 'history'

import Todos from '../pages/Todos'
import Tenis from '../pages/Tenis'
import Item from '../pages/Item'
import Login from '../pages/Login'
import Cadastro from '../pages/Cadastro'
import Pesquisa from '../pages/Pesquisa'
import Carrinho from '../pages/Carrinho'
import FinalizarCarrinho from '../pages/FinalizarCarrinho'
import Chuteiras from '../pages/Chuteiras'


const Routes: React.FC = () =>{
  return(
    <Provider store={redux}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Route exact path="/" component={Todos} />
          <Route path="/tenis" component={Tenis} />
          <Route path="/chuteiras" component={Chuteiras} />
          <Route path="/produto/:nome/:id" component={Item} />
          <Route path="/login" component={Login} />
          <Route path="/cadastro" component={Cadastro} />
          <Route exact path="/pesquisa/:query" component={Pesquisa} />
          <Route path="/carrinho" component={Carrinho} />
          <Route exact path="/finalizar-compra" component={FinalizarCarrinho} />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  )
}
export default Routes
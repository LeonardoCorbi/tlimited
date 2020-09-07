import React from 'react' 
import { Route, BrowserRouter } from 'react-router-dom'

import Todos from './pages/Todos'
import Tenis from './pages/Tenis'
import Chuteiras from './pages/Chuteiras'
import Sneakers from './pages/Sneakers'

const Routes: React.FC = () =>{
  return(
    <BrowserRouter>
      <Route exact path="/" component={Todos} />
      <Route path="/tenis" component={Tenis} />
      <Route path="/chuteiras" component={Chuteiras} />
      <Route path="/sneakers" component={Sneakers} />
    </BrowserRouter>
  )
}
export default Routes
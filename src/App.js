import './App.css';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import User from './components/User/User';
import PaginaNoEncontrada from './components/PaginaNoEncontrada/PaginaNoEncontrada';
import Formulario from './components/login/FormularioPage';
import ProductPage from './components/producto/ProductPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route path="/user" exact>
          <User />
          
        </Route>
        
        <Route path="/login" exact>
          <Formulario />
        </Route>

        <Route path="/producto" exact>
          <ProductPage />
          
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

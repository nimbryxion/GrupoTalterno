import './App.css';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import User from './components/User/User';
import PaginaNoEncontrada from './components/PaginaNoEncontrada/PaginaNoEncontrada';
import Formulario from './components/Login/Login';
import ProductPage from './components/producto/ProductPage';
import Register from './components/Register/Register';

function App() {
  return (
    <BrowserRouter>
      <Switch>
      <Route path="/" exact>
          <Formulario />
         </Route>
      <Route path="/user" exact>
          <User />
         </Route>
        
        <Route path="/login" exact>
          <Formulario />
        </Route>

        <Route path="/producto" exact>
          <ProductPage />
        </Route>

        <Route path="/no-encontrada" exact>
          <PaginaNoEncontrada/>
        </Route>
        <Route path="/register" exact>
          <Register/>
        </Route>
        
      </Switch>
    </BrowserRouter>
  );
}

export default App;

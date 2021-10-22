import back from "../assets/img/backgroundlogin.jpeg";
import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  FormGroup,
  ButtonGroup,
  ListGroup,
  ListGroupItem
} from "reactstrap";
import {
  auth,
  signInEmailAndPassword,
  signInWithGoogle,
} from "../Firebase/Firebase";
import { useHistory } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import '../Login/style.css';
function Login() {


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const [errors, seterrors] = useState('');
  const history = useHistory();

  useEffect(() => {
    if (loading) {
      
      return;
    }
    if (user) { history.replace("/user"); }
  }, [user, loading]);
  

  return (
    <body background= {back}>
    <div class="row vh-100 justify-content-center align-items-center" id="contenedor">
       <div class="col-sm-4 bg-ligth p-4">       
         <Container className= "blanco">
        <FormGroup>
          <label>
            Email:
          </label>
          <input
            className="form-control"
            name="email"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Correo electrónico"
            required
          />
        </FormGroup>
        <FormGroup>
          <label>
            Clave:
          </label>
          <input
            className="form-control"
            name="password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Password"
            required
          />
        </FormGroup>

        <ButtonGroup className="boton">
        <div class="form-group">
           <div class="col-lg-offset-2 col-lg-10"> 
       
          <Button className ="boton1"
            
            color="primary"
            type="submit"
            onClick={() => signInEmailAndPassword(email, password)}
          >
            Login
          </Button>

          <Button
            color="danger"
            onClick={signInWithGoogle}
          >
            Login con Google
          </Button>
         </div>
         </div>

        </ButtonGroup>


      <br />

      <ListGroup>
        <ListGroupItem tag="a" href="/reset">Olvide mi clave</ListGroupItem>
        <ListGroupItem tag="a" href="/register">Crea tu cuenta</ListGroupItem>
      </ListGroup>
     
    </Container>
    </div>
    </div>
    </body>
    
  );
}
export default Login;


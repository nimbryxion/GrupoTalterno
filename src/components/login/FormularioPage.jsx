import React from 'react'
import { Redirect } from 'react-router-dom';

import './FormularioStyle.css';
import images from '../assets/imges';
import { ReactDOM } from 'react';
import { browserHistory } from 'react-router';
import Footer from '../shared/components/footer/Footer';

class Formulario extends React.Component {






    doLogin(event) {
        event.preventDefault();
        this.props.history.push("/");
        let user, contra, nom, ed, i;
        i = 0;
        user = "ADMIN";
        contra = "12345";
        nom = event.target.nombre.value;
        ed = event.target.password.value;

        while (i < 3) {

            if (nom === user && ed === contra) {
                console.log("loginya")



                i = i + 1;
                return true
            }
            else if (i < 3) {

                alert('ATENCIÓN datos erroneos');
                return true
            }
            else {
                alert('no vuelva por aquí ');
            }
            // else {
            // alert("Por favor ingrese, nombre de usuario y contraseña correctos:" +  nom);
            //  return false     }
        }
    }


    render() {

        return (
            <div className="App">
                <body background={images.foto1} >
                    <form className="formulario" onSubmit={this.doLogin}>


                        {/* <!-- <h1>Registro</h1> --> */}
                        <div className="contenedor">

                            <div className="logo">
                                <img className="foto 1" src={images.foto2} width="270px" height="270px" />
                            </div>

                            <div className="usuario">
                                <i className="fas fa-user-alt icon"></i>
                                <input type="text" placeholder="Usuario" required id="nombre" />
                            </div>

                            {/* <!-- <div classNane="correo">
                  <i classNane="fas fa-envelope icon"></i>
                  <input type="text" placeholder="Correo Electrónico" required>
                  </div> --> */}

                            <div className="password">
                                <i className="fas fa-key icon"></i>
                                <input type="password" placeholder="Contraseña" required id="password" />
                            </div>
                            <input type="submit" value="INGRESAR" className="button" />
                            <p>  Ó </p>
                            <div className="g-signin2" data-onsuccess="onSignIn"></div>


                            <p>¿Perdio su contraseña? <a className="link" href="loginvista.html">Recuperar contraseña</a></p>


                        </div>


                    </form>

                </body>

                <Footer />

            </div>
        );
    }

}





export default Formulario;
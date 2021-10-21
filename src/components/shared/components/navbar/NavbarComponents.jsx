import React from "react";
import './NavbarComponents.css';
import { Link, link } from "react-router-dom";
import img2 from "./favicon.png";

function NavbarComponents() {


    return (


        <nav className="navbar navbar-expand-lg navbar-components">
            <div className="container">
                <a className="navbar-brand">
                    <Link to="/login">
                        <img src={img2} alt="" width="30" height="24" className="d-inline-block align-text-top" />
                    </Link>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav me-auto mb-2 mb-lg-0">
                        <Link to="/user" className="nav-link active" aria-current="page" href="usuario.html"><i className="bi bi-person"></i> Usuarios</Link>
                        <Link to="/vendedores" className="nav-link active" aria-current="page" href="formulario.html"><i className="bi bi-people"></i> Vendedores</Link>
                        <Link to="/producto" className="nav-link active" aria-current="page" href="producto.html"><i className="bi bi-shop-window"></i> Productos</Link>
                        <Link to="/ventas" className="nav-link active" aria-current="page" href="lapaginavendedor.html"><i className="bi bi-file-earmark"></i> Ventas</Link>
                    </div>


                </div>

            </div>
        </nav>




    );
}

export default NavbarComponents;
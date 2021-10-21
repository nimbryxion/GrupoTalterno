import react from "react";
import './Footer';
import { Link, link } from "react-router-dom";
import './Footer.css'

function Footer() {

    return (


        <nav className="nnavbar fixed-bottom footer-col">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <p className="navbar-text pull-center">Moda T - © 2021 |
                            <Link to="http://modat.oficial/"> Contáctanos aquí</Link>
                        </p>
                    </div>
                </div>
            </div>
        </nav>



    );
}

export default Footer;

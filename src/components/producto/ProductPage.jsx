import React from 'react';
import NavbarComponents from '../shared/components/navbar/NavbarComponents';
import Footer from '../shared/components/footer/Footer';
import { Table, Button, Container, Modal, ModalHeader, ModalBody, FormGroup, ModalFooter, Spinner } from "reactstrap";
import images from '../assets/imges';
import './ProductStyle.css';

const BASE_URL = process.env.REACT_APP_API_URL;
const PATH_PRODUCTOS= 'productos';

class Producto extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            
            modalActualizar: false,
            modalInsertar: false,
            form: {
                _id: "",
                producto: "",
                valorUnitario: "",
                estado: ""
            },
            mostrarCargando: false
        };
    }

    componentDidMount() {
        this.cargarProductos();
    }

    mostrarModalActualizar = (dato) => {

        this.setState({ modalActualizar: true, form: dato });

    };

    cerrarModalActualizar = () => {
        this.setState({ modalActualizar: false });
    };

    mostrarModalInsertar = () => {
        this.setState({
            modalInsertar: true, form: {

                _id: "",
                producto: "",
                valorUnitario: "",
                estado: ""
            }
        });
    };

    cerrarModalInsertar = () => {
        this.setState({ modalInsertar: false });
    };

    editar = (dato) => {
        this.actualizarProducto(dato);
        this.setState({ modalActualizar: false });
    };

    eliminar = (dato) => {
        let opcion = window.confirm("¿Está seguro que desea eliminar a " + dato.valorUnitario + "?");
        if (opcion) {
            this.borrarProducto(dato._id)
        }

    };

    insertar = () => {
        let ProductoACrear = { ...this.state.form };

        this.crearProducto(ProductoACrear);
        this.setState({ modalInsertar: false });

    }

    

    handleChange = (e) => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            },
        });
    };

    render() {

        return (
            <>
                <NavbarComponents />
                {/* <body background={images.foto1} > */}

                    <Container>
                        <div className="background">
                            <div className="container">
                                <div className="mt-3">
                                    <div className="row">
                                        <nav className="navbar navbar-light navbar-ventas">
                                            <div className="container-fluid">
                                                <a className="navbar-brand"> <i className="bi bi-file-earmark-plus"></i> Productos </a>
                                            </div>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <input class="form-control col-md-4" placeholder="Buscar......" value={this.state.text} onChange={(text) => this.buscar(text)} />
                        <br />
                        <Button color="primary" onClick={() => this.mostrarModalInsertar()}>Ingresar Producto</Button>
                        <br />
                        <br />
                        <Table>
                            {this.state.mostrarCargando ? (
                                <Spinner
                                    size="xl" type="grow"
                                    color="success"
                                />
                            ) : null}
                            <thead>
                                <tr>
                                    <th>Producto</th>
                                    <th>Valor Unitario</th>
                                    <th>Estado</th>
                                </tr>
                            </thead>

                            <tbody>
                                {this.state.data.map((dato) => (
                                    <tr key={dato._id}>
                                        <td>{dato.Producto}</td>
                                        <td>{dato.valorUnitario}</td>
                                        <td>{dato.estado}</td>
                                        <td>
                                            <Button
                                                color="primary"
                                                onClick={() => this.mostrarModalActualizar(dato)}
                                            >
                                                Editar
                                            </Button>{" "}
                                            <Button color="danger" onClick={() => this.eliminar(dato)}>Eliminar</Button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Container>

                    <Modal isOpen={this.state.modalActualizar}>
                        <ModalHeader>
                            <div><h3>Actualizar Producto {this.state.form._id}</h3></div>
                        </ModalHeader>

                        <ModalBody>
                            <FormGroup>
                                <label>
                                    Id:
                                </label>

                                <input
                                    className="form-control"
                                    readOnly
                                    type="text"
                                    value={this.state.form._id}
                                />
                            </FormGroup>

                            <FormGroup>
                                <label>
                                    Producto
                                </label>
                                <input
                                    className="form-control"
                                    name="Producto"
                                    type="text"
                                    onChange={this.handleChange}
                                    value={this.state.form.producto}
                                    required
                                />
                            </FormGroup>

                            <FormGroup>
                                <label>
                                    Valor Unitario
                                </label>
                                <input
                                    className="form-control"
                                    name="valorUnitario"
                                    type="text"
                                    onChange={this.handleChange}
                                    value={this.state.form.valorUnitario}
                                />
                            </FormGroup>

                            <FormGroup>
                                <label>
                                    Estado:
                                </label>
                                <input
                                    className="form-control"
                                    name="estado"
                                    type="text"
                                    onChange={this.handleChange}
                                    value={this.state.form.estado}
                                />
                            </FormGroup>


                        </ModalBody>

                        <ModalFooter>
                            <Button
                                color="primary"
                                onClick={() => this.editar(this.state.form)}
                            >
                                Actualizar
                            </Button>
                            <Button
                                className="btn btn-danger"
                                onClick={() => this.cerrarModalActualizar()}
                            >
                                Cancelar
                            </Button>
                        </ModalFooter>
                    </Modal>



                    <Modal isOpen={this.state.modalInsertar}>
                        <ModalHeader>
                            <div><h3>Ingresar Producto</h3></div>
                        </ModalHeader>

                        <ModalBody>

                            <FormGroup>
                                <label>
                                    Producto
                                </label>
                                <input
                                    className="form-control"
                                    name="Producto"
                                    type="text"
                                    onChange={this.handleChange}
                                    required
                                />
                            </FormGroup>

                            <FormGroup>
                                <label>
                                    Valor Unitario
                                </label>
                                <input
                                    className="form-control"
                                    name="valorUnitario"
                                    type="text"
                                    onChange={this.handleChange}
                                />
                            </FormGroup>

                            <FormGroup>
                                <label>
                                    Estado:
                                </label>
                                <input
                                    className="form-control"
                                    name="estado"
                                    type="text"
                                    onChange={this.handleChange}
                                />
                            </FormGroup>


                        </ModalBody>

                        <ModalFooter>
                            <Button
                                color="primary"
                                onClick={() => this.insertar()}
                            >
                                Insertar
                            </Button>
                            <Button
                                className="btn btn-danger"
                                onClick={() => this.cerrarModalInsertar()}
                            >
                                Cancelar
                            </Button>
                        </ModalFooter>
                    </Modal>
                {/* </body > */}
                <Footer />

            </>
        );
    }


    cargarProductos() {
        this.setState({ mostrarCargando: true });
        fetch(`${BASE_URL}${PATH_PRODUCTOS}`)
            .then(result => result.json())
            .then(
                (result) => {
                    this.setState({ data: result, mostrarCargando: false });
                },
                // Nota: es importante manejar errores aquí y no en 
                // un bloque catch() para que no interceptemos errores
                // de errores reales en los componentes.
                (error) => {
                    console.log(error);
                }
            )
    }


    crearProducto(producto) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(producto)
        };
        fetch(`${BASE_URL}${PATH_PRODUCTOS}`, requestOptions)
            .then(result => result.json())
            .then(
                (result) => {
                    this.cargarProductos();
                },
                (error) => {
                    console.log(error);
                }
            );
    }

    borrarProducto(id) {
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
        };
        fetch(`${BASE_URL}${PATH_PRODUCTOS}/${id}`, requestOptions)
            .then(result => result.json())
            .then(
                (result) => {
                    this.cargarProductos();
                },
                (error) => {
                    console.log(error);
                }
            );
    }

    actualizarProducto(producto) {
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(producto)
        };
        fetch(`${BASE_URL}${PATH_PRODUCTOS}/${producto._id}`, requestOptions)
            .then(result => result.json())
            .then(
                (result) => {
                    this.cargarProductos();
                },
                (error) => {
                    console.log(error);
                }
            );
    }

    // buscarCustomer(producto) {
    //     const requestOptions = {
    //         method: 'GET',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(producto)
    //     };
    //     fetch(`${BASE_URL}${PATH_PRODUCTOS}/${producto._id}`, requestOptions)
    //         .then(result => result.json())
    //         .then(
    //             (result) => {
    //                 this.cargarProductos();
    //             },
    //             (error) => {
    //                 console.log(error);
    //             }
        
    }


export default Producto;

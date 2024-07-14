import '../App.css';
import Nav from '../components/NavBar/navbar';
import { useState } from 'react';
import { useParams } from 'react-router-dom';

function FormStream({movies}) {
    const {movie} = useParams();
    const props = movies.find(movie => movie.id = movie);
    console.log(props.titulo);
    const [datos, setDatos] = useState({
        pelicula: props.titulo,
        alquiler: false,
        compra: false,
        usuario: '',
        nombre: '',
        email: '',
        direccion: '',
        img: props.img
    });

    function setAlquilar(data) {
        setDatos((valores) => ({
            ...valores,
            alquiler: !data.alquiler
        }))
    }

    function setCompra(data) {
        setDatos((valores) => ({
            ...valores,
            compra: !data.compra
        }))
    }

    function setUsuario(data) {
        setDatos((valores) => ({
            ...valores,
            usuario: data.target.value
        }))
    }

    function setNombre(data) {
        setDatos((valores) => ({
            ...valores,
            nombre: data.target.value
        }))
    }

    function setEmail(data) {
        setDatos((valores) => ({
            ...valores,
            email: data.target.value
        }))
    }

    function setAddress(data) {
        setDatos((valores) => ({
            ...valores,
            direccion: data.target.value
        }))
    }

    function confirmar(data) {
        data.preventDefault();
        var mov = datos.alquiler ? 'has alquilado ' : 'has comprado ';
        var persona = datos.usuario != null ? datos.usuario : datos.nombre;
        alert('Felicidades ' + persona + ' ' + mov + datos.pelicula);
    }

    return (
        <div className="App App-header">
            <Nav />
            <div className="form-flex-container">
                <div>
                    <img src={datos.img} className="img-form" />
                </div>
                <form onSubmit={confirmar}>
                    <div>
                        <div class="row">
                            <div>
                                <p>...........</p>
                                <h4 className="label-form"> Datos de lamina <i class="fa fa-film"></i> </h4>
                                <p className="label-form">--------------------</p>
                                <label className="label-form" ><i class="fa fa-film"></i> Lamina:  </label>
                                <input className="input-form" type="text" value={datos.pelicula} readOnly />
                                .
                                <div class="row">
                                    <div class="col-20"></div>
                                    <label className="label-form">
                                        <input type="checkbox" value={datos.alquiler} onChange={setAlquilar} /> Alquiler &nbsp;
                                    </label>
                                </div>
                                <p>...........</p>
                                <div class="row">
                                    <label className="label-form">
                                        <input type="checkbox" value={datos.compra} onChange={setCompra}/> Compra
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                    <p>...........</p>
                    <p>...........</p>
                        <h4 className="label-form"> Datos de Usuario <i class="fa fa-user"></i> </h4>
                        <p className="label-form">----------------------</p>
                        <div class="row">
                            <label className="label-form" ><i class="fa fa-user"></i> Usuario:  </label>
                            <input className="input-form" type="text" value={datos.usuario} onChange={setUsuario} />
                        </div>
                        <div class="row">
                            <label className="label-form" ><i class="fa fa-user"></i> Nombre:  </label>
                            <input className="input-form" type="text" value={datos.nombre} onChange={setNombre} />
                        </div>
                        <div class="row">
                            <label className="label-form" ><i class="fa fa-envelope"></i> Email:  </label>
                            <input className="input-form" type="text" value={datos.email} onChange={setEmail} />
                        </div>
                        <div class="row">
                            <label className="label-form" ><i class="fa fa-address-card-o"></i> Direccion:  </label>
                            <input className="input-form" type="text" value={datos.direccion} onChange={setAddress} />    
                        </div>
                    </div>
                    <div class="row">
                        <input className="button-formulario" type="submit" value="Guardar" />
                    </div>
                </form>
            </div>
        </div>
    );
}

export default FormStream;
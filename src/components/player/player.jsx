import '../../App.css';
import './player.css';
import img from '../../images/rescate_imposible.jpg';
import Nav from '../NavBar/navbar';

/*Libreria importada para la reproduccion de video*/
import ReactPlayer from 'react-player';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Player({movies}) {
    const {movieId} = useParams();
    const props = movies.find(movieId => movieId.id = movieId);
    console.log(movieId);
    const [datos] = useState({
        id: props.id,
        Titulo: props.titulo,
        url: props.trailer, //'https://www.youtube.com/watch?v=oNV-Lubri8s',
        sinopsis: props.sinopsis, //'Un equipo del Delta Force sufre una emboscada en territorio enemigo, pero un oficial novato se niega a abandonar a sus compañeros. Se inicia entonces una batalla infernal por la supervivencia en la que solo reciben la ayuda de un piloto de drones.',
        director: props.director, //'William Eubank',
        AnioPub: props.anioPub,
        critica: props.critica,
        img: props.img
    }); 
    return (
        <div className="App App-header">
            <Nav />
            <div className="container">
                <div className="player-flex-container">
                    <div>
                        <div class="row">
                            <img src={datos.img} className="img-player" />
                        </div>
                        <Link to={`/Formulario/${datos.id}`}><input className="button-formulario" value="Obtener" /></Link>
                    </div>
                    <div>
                        <div class="row">
                            <div className="container-player">
                                <ReactPlayer url={datos.url} controls/>
                            </div>
                            <div class="row">
                                <label className="label-player">Director: {datos.director} </label>
                            </div>
                            <div class="row">
                                <label className="label-player">Publicacion: {datos.AnioPub} </label>
                            </div>
                            <div class="row">
                                <label className="label-player">Sinopsis: {datos.sinopsis} </label>
                            </div>
                            <div class="row">
                                <a className="label-player" href={datos.critica}>Critica</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Player;
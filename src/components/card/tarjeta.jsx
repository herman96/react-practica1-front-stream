import './card.css';
import movie1 from '../../images/movie_icon.jpg';
import Player from '../player/player';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import movies from '../../data/movies';

function Cards() {
  const [dataMovie1] = useState({
    id: 1,
    Titulo: 'Bastardos Sin Gloria',
    Sinopsis: 'II Guerra Mundial, Francia, Shosanna presencia la ejecución de su familia por orden del coronel nazi Hans Landa. Huye a Paris y adopta una nueva identidad como propietaria de un cine. Mientras el teniente Aldo Raine adiestra a un grupo de soldados judíos. Los hombres de Raine y una actriz alemana que agente doble, deben llevar a cabo una misión que hará caer a los jefes del Tercer Reich. El destino quiere que todos se encuentren bajo la marquesina de un cine donde Shosanna espera para vengarse.',
    Director: 'Quentin Tarantino',
    Categoria: 'Accion',
    AnioPub: '2009',
    url: 'https://www.youtube.com/watch?v=XrDTjOV7kU0',
    critica: 'https://www.rottentomatoes.com/m/inglourious_basterds/reviews'
  });

  const [dataMovie2] = useState({
    id: 2,
    Titulo: 'MAD MAX: Furia en camino',
    Sinopsis: 'Aunque está decidido a vagar solo por el páramo post-apocalíptico, Mad Max se une a Furiosa, una comandante fugitiva, y su banda, quienes están tratando de escapar de un señor de la guerra.',
    Director: 'George Miller',
    Categoria: 'Accion',
    AnioPub: '2015',
    url: 'https://www.youtube.com/watch?v=1bsnGZq2zDU',
    critica: 'https://www.rottentomatoes.com/m/mad_max_fury_road/reviews'
  });

  const [dataMovie3] = useState({
    id: 4,
    Titulo: 'Rescate Imposible',
    Sinopsis: 'Un equipo del Delta Force sufre una emboscada en territorio enemigo, pero un oficial novato se niega a abandonar a sus compañeros. Se inicia entonces una batalla infernal por la supervivencia en la que solo reciben la ayuda de un piloto de drones.',
    Director: 'William Eubank',
    Categoria: 'Accion',
    AnioPub: '2024',
    url: 'https://www.youtube.com/watch?v=oNV-Lubri8s',
    critica: 'https://www.rottentomatoes.com/m/land_of_bad'
  });

  const [dataMovie4] = useState({
    id: 6,
    Titulo: 'Volver al Futuro',
    Sinopsis: 'Una máquina del tiempo transporta a un adolescente a los años 50, cuando sus padres todavía estudiaban en la secundaria.',
    Director: 'Robert Zemeckis',
    Categoria: 'Sci-Fi',
    AnioPub: '1985',
    url: 'https://www.youtube.com/watch?v=GM6_MHRc4Xo',
    critica: 'https://www.rottentomatoes.com/m/back_to_the_future'
  });

  const [dataMovie5] = useState({
    id: 3,
    Titulo: 'El Justiciero',
    Sinopsis: 'El exagente secreto estadounidense Robert McCall continúa combatiendo por su cuenta a secuestradores, maltratadores y otros delincuentes que se cruzan en su solitaria vida de conductor de un servicio de VTC. Ahora, sin embargo, va a tener que intervenir en un asunto que le afecta personalmente.',
    Director: 'Antoine Fuqua',
    Categoria: 'Accion',
    AnioPub: '2015',
    url: 'https://www.youtube.com/watch?v=j7RlqH5PXLo',
    critica: 'https://www.rottentomatoes.com/m/the_equalizer_2013'
  });

  const [dataMovie6] = useState({
    id: 9,
    Titulo: 'La Inmaculada',
    Sinopsis: 'Una monja estadounidense llega a un convento de la campiña italiana. Allí descubre que, a pesar de ser virgen, está embarazada. Al mismo tiempo, comienza a sospechar que algo perverso ocurre entre los muros del convento.',
    Director: 'Michael Mohan',
    Categoria: 'Terror',
    AnioPub: '2024',
    url: 'https://www.youtube.com/watch?v=1QbnnwkOXrU',
    critica: 'https://www.rottentomatoes.com/m/immaculate_2024/reviews'
  });

  return (
    <div>
        <div className="flex-container">
          <div class="flip-card">
              <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <img src={movie1} className='img-directorio' />
                  </div>
                  <div class="flip-card-back">
                      <h3>{dataMovie1.Titulo}</h3>
                      <p>Director: {dataMovie1.Director}</p>
                      <p>Categoria: {dataMovie1.Categoria}</p>
                      <Link to={`Details/${dataMovie1.id}`}><input className="button-formulario" value="+ Info" /></Link>
                  </div>
              </div>
          </div>

          <div class="flip-card">
              <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <img src={movie1} className='img-directorio' />
                  </div>
                  <div class="flip-card-back">
                      <h3>{dataMovie2.Titulo}</h3>
                      <p>Director: {dataMovie2.Director}</p>
                      <p>Categoria: {dataMovie2.Categoria}</p>
                      <Link to={`Details/${dataMovie2.id}`}><input className="button-formulario" value="+ Info" /></Link>
                  </div>
              </div>
          </div>

          <div class="flip-card">
              <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <img src={movie1} className='img-directorio' />
                  </div>
                  <div class="flip-card-back">
                    <h3>{dataMovie3.Titulo}</h3>
                    <p>Director: {dataMovie3.Director}</p>
                    <p>Categoria: {dataMovie3.Categoria}</p>
                    <Link to={`Details/${dataMovie3.id}`}><input className="button-formulario" value="+ Info" /></Link>
                  </div>
              </div>
          </div>
        </div>

        <div className="flex-container">
          <div class="flip-card">
              <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <img src={movie1} className='img-directorio' />
                  </div>
                  <div class="flip-card-back">
                      <h3>{dataMovie4.Titulo}</h3>
                      <p>Director: {dataMovie4.Director}</p>
                      <p>Categoria: {dataMovie4.Categoria}</p>
                      <Link to={`Details/${dataMovie4.id}`}><input className="button-formulario" value="+ Info" /></Link>
                  </div>
              </div>
          </div>

          <div class="flip-card">
              <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <img src={movie1} className='img-directorio' />
                  </div>
                  <div class="flip-card-back">
                      <h3>{dataMovie5.Titulo}</h3>
                      <p>Director: {dataMovie5.Director}</p>
                      <p>Categoria: {dataMovie5.Categoria}</p>
                      <Link to={`Details/${dataMovie5.id}`}><input className="button-formulario" value="+ Info" /></Link>
                  </div>
              </div>
          </div>

          <div class="flip-card">
              <div class="flip-card-inner">
                  <div class="flip-card-front">
                    <img src={movie1} className='img-directorio' />
                  </div>
                  <div class="flip-card-back">
                      <h3>{dataMovie6.Titulo}</h3>
                      <p>Director: {dataMovie6.Director}</p>
                      <p>Categoria: {dataMovie6.Categoria}</p>
                      <Link to={`Details/${dataMovie6.id}`}><input className="button-formulario" value="+ Info" /></Link>
                  </div>
              </div>
          </div>
        </div>
    </div>
  );
}

export default Cards;
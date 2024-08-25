import '../App.css';
import '../components/card/card.css';
import Nav from '../components/NavBar/navbar';
import Cards from '../components/card/tarjeta';

import { useFetch } from '../../service/HostService'; 

function Directorio() {
    const [category, setCategory] = useState({
        idCat: 0
    });

    const [genere, setGenere] = useState({
        idGen: 0
    });

    const { categoria } = useFetch("categorias");
    const { genero  } = useFetch("generos");

    function setMovies() {
        if(genere.idGen != 0 && category.idCat == 0) {
            const { data  } = useFetch("multimedia/genero/" + genere.idGen);
        }
        if(genere.idCat == 0 && category.idCat != 0) {
            const { data  } = useFetch("multimedia/category/" + category.idCat);
        }
    }
    return (
        <div className="App App-header">
            <Nav />
            <div>
                <div className="from-inline">
                    <button class="btn default" onChange={setMovies}><i class="fa fa-filter"></i></button>
                    <label>.........................</label>
                    <select name="categoria">
                        <option value="">--Elija una categoria--</option>
                        {categoria?.map((categorias) => (
                            <option key={categorias.idCategoria} value={category.idCat} onChange={setCategory}> { categorias.categoria } </option>
                        ))}
                    </select>
                    <label>.........................</label>
                    <select name="categoria">
                        <option value="">--Elija un genero--</option>
                        {genero?.map((generos) => (
                            <option key={generos.idGenero} value={genere.idGen} onChange={setGenere}> { generos.genero } </option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="card-container">
                <div className="flex-container">
                    {data?.map((multimedia) => ( 
                        <div class="flip-card">
                            <div class="flip-card-inner">
                                <div class="flip-card-front">
                                <img src={multimedia.imagen} className='img-directorio' />
                                </div>
                                <div class="flip-card-back">
                                <h3>{multimedia.titulo}</h3>
                                <p>Director: {multimedia.director}</p>
                                <p>Categoria: {multimedia.categoria}</p>
                                <Link to={`Details/${multimedia.idMultimedia}`}><input className="button-formulario" value="+ Info" /></Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Directorio;
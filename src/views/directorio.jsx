import '../App.css';
import '../components/card/card.css';
import Nav from '../components/NavBar/navbar';
import Cards from '../components/card/tarjeta';

function Directorio() {
    return (
        <div className="App App-header">
            <Nav />
            <div>
                <div className="from-inline">
                    <button class="btn default"><i class="fa fa-filter"></i></button>
                    <label>.........................</label>
                    <input className="input-filter" type="text" placeholder="Categoria" />
                    <label>.........................</label>
                    <input className="input-filter"  type="text" placeholder="Genero" />
                </div>
            </div>
            <div className="card-container">
                <Cards/>
            </div>
        </div>
    );
}

export default Directorio;
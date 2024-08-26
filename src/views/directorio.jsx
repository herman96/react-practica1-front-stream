import '../App.css';
import '../components/card/card.css';
import Nav from '../components/NavBar/navbar';
import { useState } from 'react';
import Card from '../components/card/tarjeta';
import { useFetch } from '../service/HostService'; 
import { useFetchCat } from '../service/useFetchCat'; 
import { useFetchGen } from '../service/useFetchGen'; 

function Directorio() {
    const { categoria } = useFetchCat("categorias");
    const { genero } = useFetchGen("generos");
    
    //const { data } = useFetch("pokemon")//"multimedia/genero/" + genere.idGen);
    
    return (
        <div className="App App-header">
            <Nav />
            <div>
                <div className="from-inline">
                    <button class="btn default"><i class="fa fa-filter"></i></button>
                    <label>.........................</label>
                    <select name="categoria">
                        <option value="">--Elija una categoria--</option>
                        {categoria?.map((categorias) => (
                            <option key={categorias.idCategoria} value={categorias.idCategoria}> { categorias.categoria } </option>
                        ))}
                    </select>
                    <label>.........................</label>
                    <select name="genero">
                        <option value="">--Elija un genero--</option>
                        {genero?.map((generos) => (
                            <option key={generos.idGenero} value={generos.idGenero}> { generos.genero } </option>
                        ))}
                    </select>
                </div>
            </div>
            <Card />
        </div>
    );
}

export default Directorio;
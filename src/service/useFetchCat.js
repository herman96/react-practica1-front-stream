import { useState, useEffect } from "react";

export function useFetchCat(url) {
  const [categoria, setCategoria] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    //fetch("https://pokeapi.co/api/v2/" + url,
    fetch("http://localhost:7000/" + url,  
        {
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*'
        }
      }
    )
    .then((response) => response.json())
    .then((categoria) => setCategoria(categoria.results))
    .finally(() => setLoading(false));
  }, []);

  return { categoria, loading };
}
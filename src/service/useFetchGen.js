import { useState, useEffect } from "react";

export function useFetchGen(url) {
  console.log(url)
  const [genero, setGenero] = useState(null);
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
    .then((genero) => setGenero(genero))
    .finally(() => setLoading(false));
  }, []);

  return { genero, loading };
}
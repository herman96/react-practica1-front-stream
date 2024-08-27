import { useState, useEffect } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);
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
    .then((data) => setData(data))
    .finally(() => setLoading(false));
  }, []);

  return { data, loading };
}
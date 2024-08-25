import { useState, useEffect } from "react";

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:7000/" + url)
    .then((response) => response.json())
    .then((data) => setData(data))
    .finally(() => setLoading(false))
  }, []);

  return { data, loading };
}
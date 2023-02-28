import { useEffect, useState } from "react";

export function uesFetchData_Function(url) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [shoes, setShoes] = useState([]);
  function getItems() {
    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setShoes(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }

  useEffect(() => {
    getItems();
    return () => {
      console.log("this should be clean for useEffect");
    };
  }, []);
  return { shoes, isLoaded, error };
}

import { useState, useEffect } from "react";
import React from "react";
import Shop from "./Shop";
export default function ShoppingAPI() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
          try {
              const response = await fetch('https://fakestoreapi.com/products');
              if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
              const result = await response.json();
            setData(result);
          } catch (error) {
            setError(error);
          } finally {
            setLoading(false);
          }
        };
    
        fetchData();
      }, []);
      if (loading) return <p>Loading data...</p>;
      if (error) return <p>Error: {error.message}</p>;
    return <Shop data = {data}/>
}
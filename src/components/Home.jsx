import React from 'react'
import Card from './Card'
import { useEffect,useState } from "react";

const Home = () => {

  
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let count=0;
  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/exchanges').then((response) => response.json()).then((actualData) => {setData(actualData);
    setError(null);
  })
    .catch((error) =>{
      setError(error.message);
        setData(null);
    })
    .finally(()=>{
      setLoading(false);
    })
   }, []);

  
  return (
    <div className="home">
        <h2>Crypto Exchanges</h2>

<div className="container">

{!loading && data.map(exchange =>{
    
    return (
        <Card list={data} number={count++} />
    )
    
})}


</div>
    </div>
  )
}

export default Home
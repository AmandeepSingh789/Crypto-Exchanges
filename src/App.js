import { useEffect,useState } from "react";
import Card from "./components/Card";
function App() {

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
    <div className="App">
      <h2>Crypto Exchanges</h2>

      <div className="container">

      {!loading && <Card list = {data} number={0}/>}

      {!loading && <Card list = {data} number={1}/>}


      {!loading && <Card list = {data} number={2}/>}

      {!loading && <Card list = {data} number={3}/>}

      {!loading && <Card list = {data} number={4}/>}

      {!loading && <Card list = {data} number={5}/>}


      {!loading && <Card list = {data} number={6}/>}

      {!loading && <Card list = {data} number={7}/>}

      {!loading && <Card list = {data} number={8}/>}

      {!loading && <Card list = {data} number={9}/>}



      </div>
      
    </div>
  );
}

export default App;

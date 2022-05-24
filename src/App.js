import { useEffect,useState } from "react";
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
   console.log(data)
  return (
    <div className="App">
      <h2>Crypto Exchanges</h2>

      <div className="container">

        
      <div className="card">
        <div className="logo">
            <img src={data[0].image} alt="" />
          </div>
        <div className="name">
            {data[0].name}
          </div>
          

      </div>
      <div className="card">
      <div className="logo">
            <img src={data[1].image} alt="" />
          </div>
        <div className="name">
            {data[1].name}
          </div>
      </div>
      
      
      <div className="card">
      <div className="logo">
            <img src={data[2].image} alt="" />
          </div>
        <div className="name">
            {data[2].name}
          </div>
      </div>

      </div>


      <div className="container">

      <div className="card">
      <div className="logo">
            <img src={data[3].image} alt="" />
          </div>
        <div className="name">
            {data[3].name}
          </div>
      </div>
      <div className="card">
      <div className="logo">
            <img src={data[4].image} alt="" />
          </div>
        <div className="name">
            {data[4].name}
          </div>
      </div> 
      
      <div className="card">
      <div className="logo">
            <img src={data[5].image} alt="" />
          </div>
        <div className="name">
            {data[5].name}
          </div>
      </div>

      </div>

      <div className="container">

      <div className="card">
        <div className="logo">
            <img src={data[6].image} alt="" />
          </div>
        <div className="name">
            {data[6].name}
          </div>
      </div>

      
      <div className="card">
      <div className="logo">
            <img src={data[7].image} alt="" />
          </div>
        <div className="name">
            {data[7].name}
          </div>
      </div> 
      
      <div className="card">
      <div className="logo">
            <img src={data[8].image} alt="" />
          </div>
        <div className="name">
            {data[8].name}
          </div>
      </div>
      </div>
      
    </div>
  );
}

export default App;

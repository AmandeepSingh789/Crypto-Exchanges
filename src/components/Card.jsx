import React from 'react'

const Card = (props) => {

    const check = () =>{
        let x= props.number;
        console.log(x);
      }
  return (
    
    <div className="container">
    
    <div className="card" onClick={check}>
             <div className="logo">  
                <img src= {props.list[props.number].image} alt="" />
            </div>

            <div className="name">
            {props.list[props.number].name}
            </div>
            <div className="volume24h">
                {props.list[props.number].trade_volume_24h_btc}
            </div> 

            <div className="link">
            <a target = "_blank" href={props.list[props.number].url} title= {props.list[props.number].url}>W e b s i t e</a>
            </div>

            <div className="country">
                {props.list[props.number].country}
            </div> 
            <div className="rank">
                Trust Score Rank:
                {props.list[props.number].trust_score_rank}
            </div> 

        </div>


    </div>
    
  )
}

export default Card
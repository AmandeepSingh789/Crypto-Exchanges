import React from 'react'

const Card = (props) => {

  return (
    
    <div className="container">
    
    <div className="card" l>
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
        </div>


    </div>
    
  )
}

export default Card
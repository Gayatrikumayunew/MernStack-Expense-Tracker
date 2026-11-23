import React from 'react'
import './card.css'
const Card = ({title,amount,icon,bgcolor,color,backgroundColor}) => {
  return (
    <div className='bg'>
    <div className="cardmenu" style={{backgroundColor:backgroundColor}}>
    <div className='card'style={{backgroundColor:backgroundColor}} >  
          <div className='icon'style={{backgroundColor:bgcolor}}>  

            <i className={icon}
            style={{ color:color}}></i>     
          </div>
          <div className='card-info'>
          <h5>{title}</h5>

          <h2>&#8377;  {amount}</h2>
          </div>
    </div></div></div>
  )
}

export default Card
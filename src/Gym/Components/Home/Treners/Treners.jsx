import React from 'react'
import { Link } from 'react-router-dom'
import '../Treners/Treners.css'
import trenersData from './TrenersData'

const Treners = () => {
  return (
    <div className="bigcontainer">
    <div className="main--containerr">
        {trenersData.map((trener , index)=>{
            return(
                <article key={index} className="cardd">
                <img className="cardimgg" src={trener.img} alt="" />
              <article className="content">
                    <div className='name'>{trener.name}</div>
                    <div className='skill'>{trener.role}</div>
                    <div className='logoss'>
                    <Link className="fa-brands fa-facebook"></Link>
                    <Link className="fa-brands fa-instagram"></Link>
                    <Link className="fa-brands fa-whatsapp"></Link>
                    <Link className="fa-brands fa-twitter"></Link>
                    </div>
              </article>
            </article>
            )
        })}
        </div>
    </div>
  )
}

export default Treners
import React from 'react'
import { Link } from 'react-router-dom'
import '../MiddalPic/Middalpic.css'

const MiddalPic = () => {
  return (
    <div className='bgimg'>
        <div className='bgimg1'>
            <div className='con1'>
              <h2 className='midH2'>Get The Result You Want</h2>
              <p className='midp'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur, laudantium quia blanditiis ipsum. <Link className='Linkp'><u>Get Started</u></Link></p>
            </div>
        </div>
    </div>
  )
}

export default MiddalPic
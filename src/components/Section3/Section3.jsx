import React from 'react'
import "./section3.scss"
import { Link } from 'react-router-dom'

const Section3 = () => {
  return (
      <div className='section3'> 
           
    <div className='section3body'>
      <h1 className='section3heading'>
      Don't have an Alma account? 

      </h1>
      <p className='section3para'>
      Modern platform for childcare, wellness assessment and parenting. 

      </p>
    </div>
      <div className='accbtn'>
      <Link to='/form'>
      <a href="#" className='Newaccbtn'>Open Your Account</a>
      </Link>
      </div>
    </div>
  )
}

export default Section3
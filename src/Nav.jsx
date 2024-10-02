import React from 'react'
import './Nav.css';
function Nav() {
  return (
    <div className='container'>
        <div className='navbar'> 
            <p className='home'>Home</p>
            <p >About</p>
            <p >Projects</p>
            <p className='contact'>Contact</p>
        </div>
    </div>
  )
}

export default Nav
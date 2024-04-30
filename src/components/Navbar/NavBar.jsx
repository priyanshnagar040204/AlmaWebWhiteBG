import React from 'react'
import "./navBar.scss"
const NavBar = () => {
  return (
    <div className='navBar-top'>
    <div className='navBar'>
      <div className="logoImg">
        <img className='logo' src="https://firebasestorage.googleapis.com/v0/b/eacc-16da4.appspot.com/o/nmp.svg?alt=media&token=c2b9a14a-e36c-46f5-bb2c-3f28704b0537" alt="not found!" />
        <img src="https://firebasestorage.googleapis.com/v0/b/eacc-16da4.appspot.com/o/Screenshot%202024-01-10%20at%2010.38.38%E2%80%AFPM.png?alt=media&token=64b0a473-9735-4261-9f77-ee120279e7c8" width="196" sizes="196px"
          srcset="https://firebasestorage.googleapis.com/v0/b/eacc-16da4.appspot.com/o/Screenshot%202024-01-10%20at%2010.38.38%E2%80%AFPM.png?alt=media&token=64b0a473-9735-4261-9f77-ee120279e7c8" alt=""  />
       
      </div>
      <div className='rightdiv'>
      <a href="#" className='home'>Home</a>
      <a href="#" target="_blank" className="book-demo" previewlistener="true">Try it Now</a>
      </div>
    </div>
 

    </div>

  )
}

export default NavBar

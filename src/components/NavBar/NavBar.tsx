import React from 'react'
import './NavBar.css'

export default function NavBar(props: {}) {
  return (
    <header className='Header'>

      <div className='Header__container'>
        <div className="contaner__left-part">
          <i className="Header__icon Header__icon_color_teal Header__icon_size_md40 material-icons">home</i>
          <ul className='left-part__options'>
            <li className="options__element">Option1</li>
            <li className="options__element">Option1</li>
            <li className="options__element">Option1</li>
            <li className="options__element">Option1</li>
          </ul>
        </div>

        <div className="container__right-part">
          <input className='right-part__input' type="text" placeholder='Search'/>
          <input className='right-part__btn' type="button" value='SignIn'/>
          <input className='right-part__btn btn_otlined' type="button" value='SignUp'/>
        </div>
      </div>

    </header>
    
  )
}

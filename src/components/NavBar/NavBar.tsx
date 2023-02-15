import React from 'react'
import './NavBar.css'
import { useState, useContext } from 'react';
import SignInModal from '../SignInModal/SignInModal';
import SignUpModal from '../SignUpModal/SignUpModal';
import { AuthContext } from '../../context';


export default function NavBar(props: {}) {
  const [activeSignIn, setActiveSignIn] = useState<boolean>(false);
  const [activeSignUp, setActiveSignUp] = useState<boolean>(false);
  
  const { isAuth } = useContext(AuthContext)
  
  
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
          {
            isAuth
              ?
              <>
              <input onClick={() => setActiveSignIn(true)} className='right-part__btn' type="button" value='Sign In'/>
              <input onClick={() => setActiveSignUp(true)} className='right-part__btn btn_otlined' type="button" value='Sign Up'/>
              <SignInModal active={activeSignIn} setActive={setActiveSignIn}/>
              <SignUpModal active={activeSignUp} setActive={setActiveSignUp}/>
              </>
              :
              <input type="button" className='right-part__btn btn_red btn_otlined' value="Log out" />
          }

        </div>
      </div>
      

    </header>
  )
}

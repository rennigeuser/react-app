import React, { useContext, useEffect } from 'react'
import { useNavigate, Navigate } from 'react-router-dom';
import { AuthContext } from '../context'


export default function Login() {
  const { setIsAuth, isAuth } = useContext(AuthContext);

  const navigate = useNavigate();

  useEffect(() => {
    if (isAuth) navigate('/', { replace: true })
  }, [])


  function login(e: React.FormEvent) {
    e.preventDefault();
    setIsAuth(true);
    localStorage.setItem('auth', 'true');
    navigate('/', { replace: true })
  }

  return (
    <div>
      <form onSubmit={login}>
        <input type="text" placeholder="Введите логин"/>
        <input type="password" placeholder="Введите пароль"/>
        <input type="submit" onSubmit={(e) => e.preventDefault()}/>
      </form>
    </div>
  )
}

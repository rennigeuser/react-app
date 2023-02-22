import React, { useEffect, useState, useCallback } from 'react';
import './App.css'
import { BrowserRouter } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import { AuthContext } from './context';
import AppRouter from './components/AppRouter/AppRouter';


function App() {

  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (localStorage.getItem('auth')) {
        setIsAuth(true)
    }
    setIsLoading(false);
  }, [])
  

  const authenticate = () => {
    if (isAuth) {
      setIsAuth(false);
      localStorage.removeItem('auth');
    } else {
      setIsAuth(true);
      localStorage.setItem('auth', 'true');
    }
  }

  return (
    <>
      <AuthContext.Provider value={{
        isAuth,
        setIsAuth,
        isLoading,
        setIsLoading,
        authenticate,
      }}>
        <BrowserRouter>
          <NavBar />
          <AppRouter/>
        </BrowserRouter>
      </AuthContext.Provider>
    </>
  );
}

export default App;

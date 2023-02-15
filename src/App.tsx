import React, { useEffect, useState } from 'react';
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

  return (
    <>
      <AuthContext.Provider value={{
        isAuth,
        setIsAuth,
        isLoading,
        setIsLoading
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

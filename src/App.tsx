import React, { useEffect, useState } from 'react';
import './App.css'
import { Route, Routes, Link, redirect } from 'react-router-dom'
import { BrowserRouter } from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import AdvertCarousel from './components/AdvertCarousel/AdvertCarousel';
import ProductsSection from './components/ProductsSection/ProductsSection';
import Footer from './components/Footer/Footer';
import Loader from './components/UI/Loader/Loader';
import useFetch from './hooks/useFetch';
import PostService from './API/PostService';
import { ProductData, contextStorage } from './assets/types'
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
          <NavBar/>
          <AppRouter/>
        </BrowserRouter>
      </AuthContext.Provider>
    </>
  );
}

export default App;
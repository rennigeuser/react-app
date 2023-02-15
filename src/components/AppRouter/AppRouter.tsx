import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthContext } from '../../context';
import { privateRoutes, publicRoutes } from '../../router';
import Loader from '../UI/Loader/Loader';

export default function AppRouter() {
    const { isAuth, isLoading } = useContext(AuthContext);
    console.log(isAuth)

    if (isLoading) {
        return <Loader/>
    }

    return (
        <Routes>
          {privateRoutes.map(route =>
            <Route
              path={route.path}
              element={route.element}
              key={route.path}
            />
          )}
        </Routes>
    );
};
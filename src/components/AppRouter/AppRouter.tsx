import React, { useContext } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthContext } from '../../context';
import { privateRoutes, publicRoutes } from '../../router';
import Loader from '../UI/Loader/Loader';
import { contextStorage } from '../../assets/types'

export default function AppRouter() {
    const { isAuth, isLoading } = useContext(AuthContext);
    console.log(isAuth)

    if (isLoading) {
        return <Loader/>
    }

    return (
        // isAuth
        //     ?
        //     <Routes>
        //         {privateRoutes.map(route =>
        //           <Route
        //            path={route.path}
        //            element={route.element}
        //            key={route.path}
        //           />
        //         )}
        //     </Routes>
        //     :
        //     <Routes>
        //         {publicRoutes.map(route =>
        //           <Route
        //            path={route.path}
        //            element={route.element}
        //            key={route.path}
        //           />
        //         )}
        //     </Routes>
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
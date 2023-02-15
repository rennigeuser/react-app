import Login from "../pages/Login"
import Products from "../pages/Products"


export const privateRoutes = [
    { path: '/', element: <Products/> },
]

export const publicRoutes = [
    { path: '/login', element: <Login/> },
]
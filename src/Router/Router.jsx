import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home";
import ShopProducts from "../Pages/ShopProducts/ShopProducts";
import AddNew from "../Pages/AddNew/AddNew";
import Cart from "../Pages/Cart/Cart";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import CarDetails from "../Pages/CarDetails/CarDetails";
import BrandCategory from "../Components/BrandCategory/BrandCategory";
import BrandCars from "../Pages/BrandCars/BrandCars";
import PrivateRoute from "../Pages/PrivateRoute/PrivateRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayouts />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/shop',
                element: <ShopProducts />,
                loader: () => fetch('http://127.0.0.1:5000/cardata')
            },
            {
                path: '/addnew',
                element: <PrivateRoute><AddNew /></PrivateRoute>
            },
            {
                path: '/cart',
                element: <PrivateRoute><Cart /></PrivateRoute>
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/details/:detailsId',
                element: <PrivateRoute><CarDetails /></PrivateRoute>,
                loader: () => fetch('http://127.0.0.1:5000/cardata')
            },
            {
                path: '/brand',
                element: <BrandCategory />,
                loader: () => fetch('')
            },
            {
                path: '/brand/:brandName',
                element: <PrivateRoute><BrandCars /></PrivateRoute>,
                loader: () => fetch('http://127.0.0.1:5000/cardata')
            }
        ]
    }
])

export default router;
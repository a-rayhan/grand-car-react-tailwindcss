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
import UpdateCar from "../Pages/UpdateCar/UpdateCar";

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
                loader: () => fetch('https://grand-car-server-7hsb50j7j-abu-rayhans-projects.vercel.app/cardata')
            },
            {
                path: '/addnew',
                element: <PrivateRoute><AddNew /></PrivateRoute>
            },
            {
                path: '/cart',
                element: <PrivateRoute><Cart /></PrivateRoute>,
                loader: () => fetch('https://grand-car-server-7hsb50j7j-abu-rayhans-projects.vercel.app/cartdata')
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
                loader: () => fetch('https://grand-car-server-7hsb50j7j-abu-rayhans-projects.vercel.app/cardata')
            },
            {
                path: '/brand',
                element: <BrandCategory />,
                loader: () => fetch('')
            },
            {
                path: '/brand/:brandName',
                element: <PrivateRoute><BrandCars /></PrivateRoute>,
                loader: () => fetch('https://grand-car-server-7hsb50j7j-abu-rayhans-projects.vercel.app/cardata')
            },
            {
                path: '/update/:id',
                element: <PrivateRoute><UpdateCar /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://grand-car-server-7hsb50j7j-abu-rayhans-projects.vercel.app/cardata/${params.id}`)
            }
        ]
    }
])

export default router;
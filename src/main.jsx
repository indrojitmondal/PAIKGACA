import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from './components/Navbar';
import AuthProvider from './providers/AuthProvider';
import Login from './components/Login';
import Root from './components/Root';
import MyProfile from './components/MyProfile';
import PrivateRoute from './routes/PrivateRoute';
import Register from './components/Register';
import Sliders from './components/Sliders';
import MainLayout from './components/laoutComponent/MainLayout';
import TopBrands from './layouts/Brands/TopBrands';
import Brands from './pages/Brands';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import ErrorPage from './pages/ErrorPage';
import BrandDetails from './layouts/Brands/BrandDetails';
import UpdateProfile from './components/UpdateProfile';
// import 'react-toastify/dist/ReactToastify.css';
// import { ToastContainer } from 'react-toastify';


import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";
import UpdatePassword from './components/UpdatePassword';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
     
     
      {
        path: '',
        element : <MainLayout></MainLayout>
      },
     
      {
        path: '/my-profile',
        element : <PrivateRoute> <MyProfile></MyProfile>  </PrivateRoute> 
      },
      {
        path: '/update-profile',
        element : <PrivateRoute> <UpdateProfile></UpdateProfile>  </PrivateRoute> 
      },

      {
        path: '/brands',
        element :  <Brands></Brands> 
      },
      {
        path: '/brand/:id',
        element : <PrivateRoute> <BrandDetails></BrandDetails> </PrivateRoute> ,
        loader : ()=> fetch('/coupons.json')
      }

    ]

  },
  {
    path:'/login',
    element: <Login></Login>
  },
  {
    path:'/reset-password',
    element: <UpdatePassword></UpdatePassword>
  },
  {
    path:'/register',
    element: <Register></Register>
  },
  {
    path: '*',
    element : <ErrorPage></ErrorPage>
  },
  
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>

    <AuthProvider>
        <RouterProvider router={router} />
    </AuthProvider>

    </HelmetProvider>

    <ToastContainer /> 
  

  
    
  </StrictMode>
)

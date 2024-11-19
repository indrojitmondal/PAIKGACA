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
        path: '/brands',
        element :  <Brands></Brands> 
      },

    ]

  },
  {
    path:'/login',
    element: <Login></Login>
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
  

  
    
  </StrictMode>,
)

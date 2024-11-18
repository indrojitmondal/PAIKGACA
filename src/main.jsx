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
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
     
      {
        path: '/my-profile',
        element : <PrivateRoute> <MyProfile></MyProfile>  </PrivateRoute> 
      },
      {
        path: '',
        element : <Sliders></Sliders>
      }
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
  
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
        <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)

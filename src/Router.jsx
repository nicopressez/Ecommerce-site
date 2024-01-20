import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import Homepage from './components/Homepage.jsx'
import Men from './components/Men.jsx'
import Women from './components/Women.jsx'
import App from './App.jsx'

const Router = () => {
    const router = createBrowserRouter ([
  
    {
      path: "/",
      element: <App />,
      children: [{
        index:true,
        element: <Homepage />
      },
      {
        path: "/men",
        element: <Men />,
      },
      {
        path: "/women",
        element: <Women />,
      },]
    },
  ])
  return <RouterProvider router={router} />;}

  export default Router
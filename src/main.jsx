import React from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './components/Layout'
 import Candidatos from './components/pages/Candidato'

import './index.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import Index from './components/pages/Index'

const router = createBrowserRouter([
  {
  path: '/', 
  element: <Layout/>, 
  children:[
    {
      index: true,
      element: <Index/>
    },
      {
        path: '/Candidatos/:id',
        element: <div className='m-10'><Candidatos/> </div> 
      }
    ]
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router={router} />
    
    
  </React.StrictMode>,
)

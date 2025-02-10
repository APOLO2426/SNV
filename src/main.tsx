import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import PageTimer from "./timePage/PageTime.tsx"
import ErrorPage from './ErrorPage.tsx'

const router =createBrowserRouter([
  {
    path:'/',
    element:<App />,
    errorElement: <ErrorPage />
  },
  {
    path:'/p',
    element:<PageTimer/>,
    errorElement: <ErrorPage />
  }

])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)

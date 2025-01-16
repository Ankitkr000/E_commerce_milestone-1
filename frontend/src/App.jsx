import './App.css'
import Error from './pages/Error'
import Home from './pages/Home'
import Login from './pages/Login'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '*',
    element: <Error />,
  }
])

function App() {
  

  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  )
}

export default App

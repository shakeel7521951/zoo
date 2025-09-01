import './App.css'
import Footer from './components/common/Footer'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

const MainFunction = () => {
  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  )
}

const router = createBrowserRouter([
  {
    element: <MainFunction />,
    children: [{ path: '/', element: <Home /> }]
  }
])

function App () {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false })
  }, [])
  return <RouterProvider router={router} />
}

export default App

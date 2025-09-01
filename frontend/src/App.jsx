import './App.css'
import Footer from './components/common/Footer'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import LoginForm from './pages/LoginForm';
import SignupForm from './pages/SignupForm';
import About from './pages/About'

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
    children: [{ path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      {path:"/login",element:<LoginForm />},
      {path:"/signup",element:<SignupForm />}
    ]
  }
])

function App () {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false })
  }, [])
  return <RouterProvider router={router} />
}

export default App

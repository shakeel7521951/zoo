import './App.css'
import { useEffect } from 'react'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Navbar from './components/common/Navbar'
import Home from './pages/Home'
import AOS from "aos";
import "aos/dist/aos.css";
import LoginForm from './pages/LoginForm';
import SignupForm from './pages/SignupForm';
import About from './pages/About'
import Contact from './pages/Contact'
import Footer from './components/common/Footer'

const MainFunction = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  return (
    <div>
      <Navbar openCart={openCart} />   {/* pass openCart function */}
      <Outlet />
      <Footer />
      {isCartOpen && <CartModal close={closeCart} />}   {/* render modal */}
    </div>
  )
}

const router = createBrowserRouter([
  {
    element: <MainFunction />,
    children: [{ path: '/', element: <Home /> },
      { path: '/about', element: <About /> },
      {path:"/login",element:<LoginForm />},
      {path:"/signup",element:<SignupForm />},
      {path:"/contact",element:<Contact />},
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

import "./App.css";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import LoginForm from "./pages/LoginForm";
import SignupForm from "./pages/SignupForm";

const MainFunction = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    element: <MainFunction />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/contact", element: <Contact /> },
      { path: "/login", element: <LoginForm /> },
      { path: "/signup", element: <SignupForm /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

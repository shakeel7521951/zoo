import React, { useState } from "react";
import "./App.css";
import Footer from "./components/common/Footer";
import Navbar from "./components/common/Navbar";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import { Provider } from "react-redux";
import store from "./redux/store";
import CartModal from "./components/common/CartModal"; // <-- import modal

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
  );
};

const router = createBrowserRouter([
  {
    element: <MainFunction />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/services", element: <Services /> }
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;

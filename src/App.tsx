// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Home from "./pages/home.tsx";
import { Route, Routes } from "react-router-dom";
import GetStarted from "./pages/getStarted.tsx";
import Authenticatoin from "./pages/authenticatoin.tsx";
import About from "./pages/about.tsx";
import Contact from "./pages/contact.tsx";
import Navbar from "./components/navbar.tsx";
import { FoodProvider } from "./context/food/food-provider.tsx";

function App() {
  return (
    <>
      <FoodProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<GetStarted />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/authenticatoin" element={<Authenticatoin />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </FoodProvider>
    </>
  );
}

export default App;

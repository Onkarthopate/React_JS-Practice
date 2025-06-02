
import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'

import AboutUsComponents from "./components/AboutUsComponent"
import ContactComponents from "./components/ContactCompnent"
import HomeComponents from "./components/HomeComponent"

function App() {

  return (
    <>
      <BrowserRouter>

        <nav style={{ margin: '10px' }}>
          <Link to="/home" style={{ margin: '10px' }}>Home</Link>
          <Link to="/aboutus" style={{ margin: '10px' }}>About Us</Link>
          <Link to="/contact" style={{ margin: '10px' }}>Contact</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Navigate to="/" />}/>
          <Route path="/home" element={<HomeComponents />}/>
          <Route path="/contact" element={<ContactComponents />}/>
          <Route path="/aboutus" element={<AboutUsComponents />}/>
        </Routes>

      </BrowserRouter>
    </>
  )
}

export default App

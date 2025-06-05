import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Pages/Navbar';
import Home from './components/Pages/Home';
import AboutUs from './components/Pages/AboutUs';
import Dashboard from './components/Pages/Dashboard';
import ContactUs from './components/Pages/ContactUs';
import LoginPage from './components/Pages/LoginPage';
import Analytics from './components/DashboardRoutes/AnalyticsPage'
import Security from './components/DashboardRoutes/Security'
import Customization from './components/DashboardRoutes/Customization'
import ProtectedRoute from './routes/ProtectedRoutes';
function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/contact' element={<ContactUs />} />
        <Route path='/login' element={<LoginPage />} />

        <Route path="/dashboard" element={<ProtectedRoute />}>
          <Route path="" element={<Dashboard />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="security" element={<Security />} />
          <Route path="customization" element={<Customization />} />
        </Route>

      </Routes>
    </BrowserRouter>
  )
}

export default App

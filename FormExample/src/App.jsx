// import './App.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar, { AdminProtectedRoute, UserProtectedRoute } from './Pages/Navbar'
import Home from './Pages/Home'
import LoginPage from './components/LoginPage'
import ContactUs from './Pages/ContactUs'
import AboutUs from './Pages/AboutUs'
import RegisterForm from './components/Register'
import ForgetPasswordPage from './components/ForgetPassword'
import AdminDashboard from './Dashboard/AdminDashboard'
import UserDashboard from './Dashboard/UserDashboard'

function App() {

  return (
    <>
      <Router>
        <Navbar />

        <Routes>

          <Route path='/' element={<Home />}>Home</Route>
          <Route path='/aboutus' element={<AboutUs />} />About Us
          <Route path="/admin-dashboard" element={
            <AdminProtectedRoute>
              <AdminDashboard />
            </AdminProtectedRoute>
          } />
          <Route path="/user-dashboard" element={
            <UserProtectedRoute>
              <UserDashboard />
            </UserProtectedRoute>
          } />

          <Route path='/contactus' element={<ContactUs />} />ContactUs
          <Route path='/login' element={<LoginPage />} />Login
          <Route path='/register' element={<RegisterForm />} />Register
          <Route path='/forgetPassword' element={<ForgetPasswordPage />} />ForgetPassword
        </Routes>


      </Router>
    </>
  )
}

export default App

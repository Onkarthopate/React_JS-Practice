// import './App.css'
import React, { Suspense } from 'react'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Navbar, { AdminProtectedRoute, UserProtectedRoute } from './Pages/Navbar'
const Home = React.lazy(()=> import('./Pages/Home'))
const LoginPage = React.lazy(()=> import('./components/LoginPage'))
const ContactUs = React.lazy(()=> import('./Pages/ContactUs'))
const AboutUs = React.lazy(()=> import('./Pages/AboutUs'))
const RegisterForm = React.lazy(()=>import('./components/Register'))
const ForgetPasswordPage = React.lazy(()=> import('./components/ForgetPassword'))
const AdminDashboard = React.lazy(()=> import('./Dashboard/AdminDashboard'))
const UserDashboard = React.lazy(()=> import('./Dashboard/UserDashboard'))


function App() {

  return (
    <div>

      <Suspense fallback={<></>}>
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
      </Suspense>

    </div>
  )
}

export default App

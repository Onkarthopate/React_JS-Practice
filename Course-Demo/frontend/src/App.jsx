import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { CourseDetails } from './components/CourseDetails'
import { HomePage } from './components/HomePage'
import { CourseForm } from './components/CourseForm'
import { CourseFormTable } from './components/CourseFormTable'
import { NotFoundPage } from './components/NotFoundPage'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/course-form' element={<CourseForm />} />
          <Route path="/course-form/:id" element={<CourseForm />} />
          <Route path='/course-table-details' element={<CourseFormTable />} />
          <Route path='/course-details' element={<CourseDetails />} />
          <Route path="/course-details/:id" element={<CourseDetails />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
      <ToastContainer position="top-right" autoClose={3000} />

    </>
  )
}

export default App

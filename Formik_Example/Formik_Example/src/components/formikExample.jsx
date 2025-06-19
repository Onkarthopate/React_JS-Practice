import React from 'react'
import { Formik, Form, ErrorMessage, Field } from 'formik'
import * as Yup from 'yup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const FormicExample = () => {

  const initialValues = {
    name: '',
    email: '',
    mobileNumber: '',
    gender: '',
    message: ''
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log('data', values);
    setTimeout(() => {
      toast.success('Feedback Submitted Successfully!');
    }, 300);
    resetForm();
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .matches(/^[A-Za-z ]+$/, 'Only letters are allowed')
      .required('Name is required'),
    email: Yup.string()
      .email('Invalid email')
      .required('Email is required'),
    mobileNumber: Yup.string()
      .matches(/^[0-9]{10}$/, 'Mobile must be exactly 10 digits')
      .required('Mobile is required'),
    gender: Yup.string()
      .oneOf(['male', 'female'], 'Select a gender')
      .required('Gender is required'),
    message: Yup.string()
      .required('Message is required'),
  });

  return (
    <div className='container mt-5' style={{ maxWidth: '600px' }}>
      <h3 className='text-primary text-center'>Feedback Form</h3>
      <Formik
        onSubmit={handleSubmit}
        initialValues={initialValues}
        validationSchema={validationSchema}
      >
        <Form>
          {/* Name */}
          <label className='form-label'>Name</label>
          <Field name="name" className="form-control" />
          <div className='text-danger'><ErrorMessage name='name' /></div>

          {/* Email */}
          <label className='form-label'>Email</label>
          <Field name="email" className="form-control" />
          <div className='text-danger'><ErrorMessage name='email' /></div>

          {/* Mobile Number */}
          <label className='form-label'>Mobile Number</label>
          <Field name="mobileNumber" className="form-control" />
          <div className='text-danger'><ErrorMessage name='mobileNumber' /></div>

          {/* Gender */}
          <div className="mb-3">
            <label className="form-label d-block">Gender</label>
            <div className="form-check form-check-inline">
              <Field type="radio" name="gender" value="male" className="form-check-input" id="male" />
              <label htmlFor="male" className="form-check-label">Male</label>
            </div>
            <div className="form-check form-check-inline">
              <Field type="radio" name="gender" value="female" className="form-check-input" id="female" />
              <label htmlFor="female" className="form-check-label">Female</label>
            </div>
            <div className="text-danger"><ErrorMessage name="gender" /></div>
          </div>

          {/* Message */}
          <div className="mb-3">
            <label className="form-label">Feedback</label>
            <Field as="textarea" name="message" className="form-control" rows="4" />
            <div className="text-danger"><ErrorMessage name="message" /></div>
          </div>

          {/* Submit */}
          <button type="submit" className="btn btn-primary">Submit</button>
        </Form>
      </Formik>
      <ToastContainer />
    </div>
  );
};

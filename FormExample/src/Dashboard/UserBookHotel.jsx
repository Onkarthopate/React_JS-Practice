import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function UserBookHotel({ show, handleClose, hotel }) {
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('currentUser'));
    if (user) {
      setValue('name', user.name || '');
      setValue('email', user.email || '');
    }
  }, [show, setValue]);

  const onSubmit = (data) => {
    const bookingDetails = {
      hotelName: hotel?.name,
      ...data,
    };
    
    console.log('Booking Confirmed:', bookingDetails);
    toast.success('Your Booking was Confirmed!')

    const bookings = JSON.parse(localStorage.getItem('bookings')) || [];
    bookings.push(bookingDetails);
    localStorage.setItem('bookings', JSON.stringify(bookings));

    reset();
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Modal.Header closeButton>
          <Modal.Title>Book Hotel: {hotel?.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form.Group className="mb-2">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              {...register('name', { required: 'Name is required' })}
              placeholder="Your Name"
              isInvalid={!!errors.name}
            />
            <Form.Control.Feedback type="invalid">{errors.name?.message}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: 'Invalid email address',
                },
              })}
              placeholder="name@example.com"
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type="invalid">{errors.email?.message}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control
              type="tel"
              {...register('mobile', {
                required: 'Mobile is required',
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: 'Enter 10-digit mobile number',
                },
              })}
              placeholder="Mobile Number"
              isInvalid={!!errors.mobile}
            />
            <Form.Control.Feedback type="invalid">{errors.mobile?.message}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Age</Form.Label>
            <Form.Control
              type="number"
              {...register('age', {
                required: 'Age is required',
                min: { value: 18, message: 'Minimum age is 18' },
              })}
              placeholder="Your Age"
              isInvalid={!!errors.age}
            />
            <Form.Control.Feedback type="invalid">{errors.age?.message}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Number of People</Form.Label>
            <Form.Control
              type="number"
              {...register('people', {
                required: 'Number of people is required',
                min: { value: 1, message: 'At least 1 person' },
              })}
              placeholder="How many people?"
              isInvalid={!!errors.people}
            />
            <Form.Control.Feedback type="invalid">{errors.people?.message}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Room Count</Form.Label>
            <Form.Control
              type="number"
              {...register('roomCount', {
                required: 'Room count is required',
                min: { value: 1, message: 'At least 1 room' },
              })}
              placeholder="How many rooms?"
              isInvalid={!!errors.roomCount}
            />
            <Form.Control.Feedback type="invalid">{errors.roomCount?.message}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-2">
            <Form.Label>Special Requests</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              {...register('message')}
              placeholder="Any message..."
            />
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button type="submit" variant="primary" >
            Confirm Booking
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
    
  );
}

export default UserBookHotel;

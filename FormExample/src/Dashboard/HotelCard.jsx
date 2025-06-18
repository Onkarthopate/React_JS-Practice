// HotelCard.jsx
import React from 'react';

const HotelCard = ({ hotel, onBook }) => {
  return (
    <div className="col-md-6 mb-4">
      <div className="card h-100">
        <img
          src={hotel.image}
          className="card-img-top"
          alt={hotel.name}
          style={{ height: '200px', objectFit: 'cover' }}
        />
        <div className="card-body">
          <h5 className="card-title d-flex justify-content-between">
            {hotel.name}
            <span className="text-success">${hotel.price}</span>
          </h5>
          <p className="card-text">{hotel.description}</p>
          <p className="text-muted">
            Room: {hotel.roomType} | Rating: {hotel.rating}
          </p>
          <button className="btn btn-primary w-100" onClick={onBook}>
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};
export default HotelCard;
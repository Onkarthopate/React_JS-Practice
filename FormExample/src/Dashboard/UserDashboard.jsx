// UserDashboard.jsx
import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import room1 from '../images/room1.jpeg';
import room2 from '../images/room2.jpg';
import room3 from '../images/room3.jpg';
import room4 from '../images/room4.jpg';
import room5 from '../images/room5.jpg';
import room6 from '../images/room6.jpg';

import HotelCard from './HotelCard';
import UserBookHotel from './UserBookHotel';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const hotelData = [
  {
    id: 1,
    name: "Sunset Inn",
    roomType: "Single",
    price: 45,
    rating: 7.5,
    image: room1,
    description: "Cozy single room with all essentials."
  },
  {
    id: 2,
    name: "Ocean Breeze Hotel",
    roomType: "Double",
    price: 70,
    rating: 8.3,
    image: room2,
    description: "Spacious double room with sea view."
  },
  {
    id: 3,
    name: "Mountain View Lodge",
    roomType: "Suite",
    price: 120,
    rating: 9.2,
    image: room3,
    description: "Luxury suite with mountain views."
  },
  {
    id: 4,
    name: "City Lights Hotel",
    roomType: "Double",
    price: 55,
    rating: 6.9,
    image: room4,
    description: "Affordable comfort in the city center."
  },
  {
    id: 5,
    name: "Budget Stay",
    roomType: "Single",
    price: 35,
    rating: 5.2,
    image: room5,
    description: "Clean and simple rooms for budget travelers."
  },
  {
    id: 6,
    name: "Royal Heritage",
    roomType: "Suite",
    price: 180,
    rating: 9.4,
    image: room6,
    description: "Elegant suite in a heritage property with royal amenities."
  }
];

const UserDashboard = () => {
  const [hotels] = useState(hotelData);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncedQuery, setDebouncedQuery] = useState('');
  const [selectedRange, setSelectedRange] = useState(null);
  const [sortOrder, setSortOrder] = useState('');
  const [selectedRatingRange, setSelectedRatingRange] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const [show, setShow] = useState(false);
  const [selectedHotel, setSelectedHotel] = useState(null);

  const handleBookNow = (hotel) => {
    setSelectedHotel(hotel);
    setShow(true);
  };

  const handleClose = () => setShow(false);


  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setDebouncedQuery(searchQuery);
      setLoading(false);
    }, 500);
    return () => clearTimeout(timeout);
  }, [searchQuery, selectedRange, sortOrder, selectedRatingRange, currentPage]);

  const filteredHotels = hotels
    .filter(hotel => {
      const matchesSearch = hotel.name.toLowerCase().startsWith(debouncedQuery.toLowerCase());
      const matchesPrice = selectedRange ? hotel.price >= selectedRange.min && hotel.price <= selectedRange.max : true;
      const matchesRating = selectedRatingRange ? hotel.rating >= selectedRatingRange.min && hotel.rating <= selectedRatingRange.max : true;
      return matchesSearch && matchesPrice && matchesRating;
    })
    .sort((a, b) => {
      if (sortOrder === 'lowToHigh') return a.price - b.price;
      if (sortOrder === 'highToLow') return b.price - a.price;
      return 0;
    });

  const handlePriceSelect = (min, max) => {
    setSelectedRange({ min, max });
    setCurrentPage(1);
  };

  const handleRatingSelect = (min, max) => {
    setSelectedRatingRange({ min, max });
    setCurrentPage(1);
  };

  const handleSort = (order) => {
    setSortOrder(order);
    setCurrentPage(1);
  };

  const handleReset = () => {
    setSearchQuery('');
    setDebouncedQuery('');
    setSelectedRange(null);
    setSortOrder('');
    setSelectedRatingRange(null);
    setCurrentPage(1);
  };

  const paginatedHotels = filteredHotels.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);
  const totalPages = Math.ceil(filteredHotels.length / itemsPerPage);

  return (
    <div className="container mt-4">
      <h3 className='text-center text-primary p-3'>
        Find Your Perfect Stay - Book a Hotel Now!
      </h3>

      {/* Controls */}
      <div className="d-flex flex-wrap gap-3 mb-4">
        <input
          type="search"
          placeholder="Search by name"
          className="form-control w-25"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <div className="dropdown">
          <button className="btn btn-outline-dark dropdown-toggle" data-bs-toggle="dropdown">
            {selectedRange ? `${selectedRange.min} - ${selectedRange.max}` : "Select Price"}
          </button>
          <ul className="dropdown-menu">
            <li><button className="dropdown-item" onClick={() => handlePriceSelect(30, 60)}>30 - 60</button></li>
            <li><button className="dropdown-item" onClick={() => handlePriceSelect(60, 100)}>60 - 100</button></li>
            <li><button className="dropdown-item" onClick={() => handlePriceSelect(100, 150)}>100 - 150</button></li>
          </ul>
        </div>

        <div className="dropdown">
          <button className="btn btn-outline-secondary dropdown-toggle" data-bs-toggle="dropdown">
            {sortOrder === 'lowToHigh' ? 'Price: Low to High' : sortOrder === 'highToLow' ? 'Price: High to Low' : 'Sort By'}
          </button>
          <ul className="dropdown-menu">
            <li><button className="dropdown-item" onClick={() => handleSort('lowToHigh')}>Low to High</button></li>
            <li><button className="dropdown-item" onClick={() => handleSort('highToLow')}>High to Low</button></li>
          </ul>
        </div>

        <div className="dropdown">
          <button className="btn btn-outline-success dropdown-toggle" data-bs-toggle="dropdown">
            {selectedRatingRange ? `Rating: ${selectedRatingRange.min} - ${selectedRatingRange.max}` : 'Rating'}
          </button>
          <ul className="dropdown-menu">
            <li><button className="dropdown-item" onClick={() => handleRatingSelect(0, 5)}>0 - 5</button></li>
            <li><button className="dropdown-item" onClick={() => handleRatingSelect(5, 8)}>5 - 8</button></li>
            <li><button className="dropdown-item" onClick={() => handleRatingSelect(8, 10)}>8 - 10</button></li>
          </ul>
        </div>

        <button className="btn btn-info" onClick={handleReset}>Reset</button>
      </div>

      {/* Hotels List */}
      <div className="row">
        {loading ? (
          <div className="text-center">Loading...</div>
        ) : paginatedHotels.length > 0 ? (
          paginatedHotels.map(hotel => (
            <HotelCard
              key={hotel.id}
              hotel={hotel}
              onBook={() => handleBookNow(hotel)} // ✅ Add this
            />
          ))
        ) : (
          <div className="text-center">No hotels found.</div>
        )}
      </div>


      {/* Pagination */}
      {totalPages > 1 && (
        <div className="d-flex justify-content-between align-items-center mt-4">
          <button className="btn btn-outline-primary" disabled={currentPage === 1 || loading} onClick={() => setCurrentPage(currentPage - 1)}>Prev</button>
          <span>Page {currentPage} of {totalPages}</span>
          <button className="btn btn-outline-primary" disabled={currentPage === totalPages || loading} onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
        </div>
      )}

      {selectedHotel && (
        <UserBookHotel
          show={show}
          handleClose={handleClose}
          hotel={selectedHotel}
        />
      )}
      
      <ToastContainer/>

    </div>
  );
};

export default UserDashboard;

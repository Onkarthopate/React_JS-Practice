import React, { useEffect, useState } from 'react';
import ProductList from './ProductList';
import { data } from '../product';
import './productLogic.css';

const ProductLogic = () => {
  const [products] = useState(data);

  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [debouncingQuery, setDebouncingQuery] = useState('');
  const [selectedRange, setSelectedRange] = useState(null);
  const [sortOrder, setSortOrder] = useState('');
  const [selectedRatingRange, setSelectedRatingRange] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  useEffect(() => {
    setLoading(true);
    const timeout = setTimeout(() => {
      setDebouncingQuery(searchQuery);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, [searchQuery, selectedRange, sortOrder, selectedRatingRange, currentPage]);

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.product_title
      .toLowerCase()
      .startsWith(debouncingQuery.toLowerCase());

    const matchesPrice = selectedRange
      ? product.prize >= selectedRange.min && product.prize <= selectedRange.max
      : true;

    const matchesRating = selectedRatingRange
      ? product.rating >= selectedRatingRange.min && product.rating <= selectedRatingRange.max
      : true;

    return matchesSearch && matchesPrice && matchesRating;
  }).sort((a, b) => {
    if (sortOrder === 'lowToHigh') return a.prize - b.prize;
    if (sortOrder === 'highToLow') return b.prize - a.prize;
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

  const handleClickReset = () => {
    setSearchQuery('');
    setDebouncingQuery('');
    setSelectedRange(null);
    setSortOrder('');
    setSelectedRatingRange(null);
    setCurrentPage(1);
  };

  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  return (
    <>
      <div className="container mt-4 d-flex gap-3 flex-wrap">
        {/* Search */}
        <input
          type="search"
          placeholder="Search by title"
          className="form-control w-25"
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
        />

        {/* Price Filter */}
        <div className="dropdown">
          <button className="btn btn-outline-dark dropdown-toggle" type="button" data-bs-toggle="dropdown">
            {selectedRange ? `${selectedRange.min} - ${selectedRange.max}` : "Select Price Range"}
          </button>
          <ul className="dropdown-menu">
            <li><button className="dropdown-item" onClick={() => handlePriceSelect(100, 500)}>100 - 500</button></li>
            <li><button className="dropdown-item" onClick={() => handlePriceSelect(500, 1500)}>500 - 1500</button></li>
            <li><button className="dropdown-item" onClick={() => handlePriceSelect(1500, 3000)}>1500 - 3000</button></li>
            <li><button className="dropdown-item" onClick={() => handlePriceSelect(3000, 5000)}>3000 - 5000</button></li>
          </ul>
        </div>

        {/* Sort */}
        <div className="dropdown">
          <button className="btn btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
            Sort By
          </button>
          <ul className="dropdown-menu">
            <li><button className="dropdown-item" onClick={() => handleSort('highToLow')}>High to Low</button></li>
            <li><button className="dropdown-item" onClick={() => handleSort('lowToHigh')}>Low to High</button></li>
          </ul>
        </div>

        {/* Rating Filter */}
        <div className="dropdown">
          <button className="btn btn-outline-success dropdown-toggle" type="button" data-bs-toggle="dropdown">
            Choose Rating
          </button>
          <ul className="dropdown-menu">
            <li><button className="dropdown-item" onClick={() => handleRatingSelect(0, 3)}>0 - 3</button></li>
            <li><button className="dropdown-item" onClick={() => handleRatingSelect(3, 5)}>3 - 5</button></li>
            <li><button className="dropdown-item" onClick={() => handleRatingSelect(5, 8)}>5 - 8</button></li>
            <li><button className="dropdown-item" onClick={() => handleRatingSelect(8, 10)}>8 - 10</button></li>
          </ul>
        </div>

        <div>
          <button type='reset' className='btn btn-info' onClick={handleClickReset}>Clear</button>
        </div>
      </div>

      <ProductList
        products={paginatedProducts}
        loading={loading}
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />
    </>
  );
};

export default ProductLogic;

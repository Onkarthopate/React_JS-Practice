import React from 'react';

const ProductList = ({ products, loading, currentPage, totalPages, onPageChange }) => {

  const skeletonRows = Array.from({ length: 10 }).map((_, idx) => (
    <tr key={idx}>
      <td colSpan="7" className="placeholder-glow">
        <span className="placeholder col-12"></span>
      </td>
    </tr>
  ));

  return (
    <div className="container mt-4">
      <table className="table table-striped table-bordered table-hover">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Description</th>
            <th>Price</th>
            <th>Discount</th>
            <th>Rating</th>
            <th>Category</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            skeletonRows
          ) : products.length > 0 ? (
            products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.product_title}</td>
                <td>{product.product_description}</td>
                <td>{product.prize}</td>
                <td>{product.discount}</td>
                <td>{product.rating}</td>
                <td>{product.category}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7" className="text-center">No products found.</td>
            </tr>
          )}
        </tbody>
      </table>

      <div className="d-flex justify-content-between align-items-center mt-3">
        <button
          className="btn btn-primary"
          disabled={currentPage === 1 || loading}
          onClick={() => onPageChange(currentPage - 1)}
        >
          Prev
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button
          className="btn btn-primary"
          disabled={currentPage === totalPages || loading}
          onClick={() => onPageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductList;

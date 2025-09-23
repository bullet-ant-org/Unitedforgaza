import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="d-flex align-items-center justify-content-center vh-100 text-center bg-light">
      <div className="p-5">
        <h1
          className="display-1 fw-bold text-gradient"
          style={{ fontSize: 'clamp(6rem, 25vw, 12rem)' }}
        >
          404
        </h1>
        <p className="h2 fw-light mb-4">Oops! Page Not Found.</p>
        <p className="lead text-muted mb-5">
          The page you are looking for might have been removed or is temporarily unavailable.
        </p>
        <Link to="/" className="btn btn-primary-1 rounded-pill px-4 py-3">
          Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
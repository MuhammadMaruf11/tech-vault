import React from 'react'
import { Link } from 'react-router-dom';
import './Error.css';

const Error = () => {
  return (
    <div className="pageNotFoundWrapper  text-center">
      <Link to="/">
        <button className="btn btn-info mt-5">
           Back to home
        </button>
      </Link>
    </div>
  );
}

export default Error
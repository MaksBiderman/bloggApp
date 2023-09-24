import React from 'react';
import Posts from '../features/Posts/Posts';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h1>All Posts</h1>
        <Link to="/post/add" className="btn btn-outline-primary">
          Add Post
        </Link>
      </div>
      <Posts />
    </div>
  )
};

export default Home;
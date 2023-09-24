import { useParams, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

const Post = () => {
  const { id } = useParams();
  const post = useSelector(state => state.posts.find(post => post.id === id));
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false); // stan do kontrolowania wyświetlania modalu

  if (!post) return <Navigate to="/" />

  const handleDelete = () => {
    setShowModal(true); // otwórz modal
  }

  const confirmDelete = () => {
    dispatch({ type: 'DELETE_POST', payload: id });
    // tutaj możesz dodać przekierowanie do strony głównej
    setShowModal(false); // zamknij modal
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-8 mx-auto">
          <div className="card border-0">
            <div className="d-flex justify-content-between align-items-center">
              <h2>{post.title}</h2>
              <div>
                <Link to={`/post/edit/${id}`} style={{ marginRight: '10px' }} className="btn btn-outline-primary">Edit</Link>
                <button onClick={handleDelete} className="btn btn-outline-danger">Delete</button>
              </div>
            </div>
            <p><strong>Author:</strong> {post.author}</p>
            <p><strong>Published:</strong> {post.publishedDate}</p>
            <p>{post.content}</p>
          </div>
        </div>
      </div>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Deletion</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this post?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Close</Button>
          <Button variant="danger" onClick={confirmDelete}>Delete</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Post;
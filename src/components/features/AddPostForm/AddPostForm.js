import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import shortid from 'shortid';

const AddPostForm = () => {
  const [title, setTitle] = useState('');
  const [shortDescription, setShortDescription] = useState('');
  const [content, setContent] = useState('');
  const [publishedDate, setPublishedDate] = useState('');
  const [author, setAuthor] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      id: shortid.generate(),
      title,
      shortDescription,
      content,
      publishedDate,
      author
    };

    dispatch({ type: 'ADD_POST', payload: newPost });
    navigate('/');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Description</label>
          <input type="text" className="form-control" placeholder="Short Description" value={shortDescription} onChange={(e) => setShortDescription(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Content</label>
          <textarea className="form-control" placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
        </div>
        <div className="form-group">
          <label>Date</label>
          <input type="date" className="form-control" value={publishedDate} onChange={(e) => setPublishedDate(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Author</label>
          <input type="text" className="form-control" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Add Post</button>
      </form>
    </div>
  );
}

export default AddPostForm;

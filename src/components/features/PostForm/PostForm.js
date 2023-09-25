import React, { useState } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';

const PostForm = ({ action, actionText, ...props }) => {
  const [title, setTitle] = useState(props.title || '');
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
  const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
  const [content, setContent] = useState(props.content || '');

  const handleSubmit = (e) => {
    e.preventDefault();
    const postId = props.id || shortid.generate(); 
    action({ id: postId, title, author, content, shortDescription, publishedDate });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Title</label>
          <input type="text" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Author</label>
          <input type="text" className="form-control" value={author} onChange={(e) => setAuthor(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Short Description</label>
          <input type="text" className="form-control" value={shortDescription} onChange={(e) => setShortDescription(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Content</label>
          <textarea className="form-control" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
        </div>
        <div className="form-group">
          <label>Published Date</label>
          <input type="date" className="form-control" value={publishedDate} onChange={(e) => setPublishedDate(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">{actionText}</button>
      </form>
    </div>
  );
}

PostForm.propTypes = {
  action: PropTypes.func.isRequired,
  actionText: PropTypes.string.isRequired,
  title: PropTypes.string,
  author: PropTypes.string,
  content: PropTypes.string,
  shortDescription: PropTypes.string,
  publishedDate: PropTypes.string
};

export default PostForm;

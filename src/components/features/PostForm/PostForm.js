import React, { useState } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useForm } from "react-hook-form";

const PostForm = ({ action, actionText, ...props }) => {
  const [author, setAuthor] = useState(props.author || '');
  const [publishedDate, setPublishedDate] = useState(props.publishedDate || '');
  const [shortDescription, setShortDescription] = useState(props.shortDescription || '');
  const [content, setContent] = useState(props.content || '');
  const [contentError, setContentError] = useState(false);
  const [dateError, setDateError] = useState(false);

  const { register, handleSubmit: validate, formState: { errors } } = useForm({
    defaultValues: {
      title: props.title || '',
      author: props.author || '',
      shortDescription: props.shortDescription || ''
    }
  });

  const handleSubmit = (data) => {
    setContentError(!content);
    setDateError(!publishedDate);
    if (content && publishedDate) {
      const postId = props.id || shortid.generate();
      action({
        id: postId,
        title: data.title,
        author,
        content,
        shortDescription,
        publishedDate
      });
    }
  };

  return (
    <div>
      <form onSubmit={validate(handleSubmit)}>
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            className="form-control"
            {...register("title", { required: "Title is required", minLength: { value: 3, message: "Title should be longer than 3 characters" } })}
            placeholder="Enter title"
          />
          {errors.title && <small className="d-block form-text text-danger mt-2">{errors.title.message}</small>}
        </div>
        <div className="form-group">
          <label>Author</label>
          <input
            type="text"
            className="form-control"
            {...register("author", { required: "Author is required", minLength: { value: 3, message: "Author should be longer than 3 characters" } })}
            placeholder="Enter author"
          />
          {errors.author && <small className="d-block form-text text-danger mt-2">{errors.author.message}</small>}
        </div>
        <div className="form-group">
          <label>Short Description</label>
          <input
            type="text"
            className="form-control"
            {...register("shortDescription", { required: "Short description is required", minLength: { value: 20, message: "Short description should be at least 20 characters long" } })}
            placeholder="Enter short description"
          />
          {errors.shortDescription && <small className="d-block form-text text-danger mt-2">{errors.shortDescription.message}</small>}
        </div>
        <div className="form-group">
          <label>Content</label>
          <ReactQuill value={content} onChange={setContent} />
          {contentError && <small className="d-block form-text text-danger mt-2">Content can't be empty</small>}
        </div>
        <div className="form-group">
          <label>Published Date</label>
          <DatePicker
            selected={publishedDate}
            onChange={(date) => setPublishedDate(date)}
            dateFormat="MM/dd/yyyy"
          />
          {dateError && <small className="d-block form-text text-danger mt-2">Published date can't be empty</small>}
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

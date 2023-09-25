import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import PostForm from '../PostForm/PostForm';
import { editPost, selectPostById } from '../../../redux/postsRedux';

const EditPostForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams(); // Pobieranie id z adresu URL

  const post = useSelector(state => selectPostById(state, id)); // Pobieranie postu o danym id

  // Jeśli post o danym id nie istnieje, przekieruj na stronę główną
  if (!post) {
    navigate('/');
    return null;
  }

  const handleSubmit = updatedPost => {
    dispatch(editPost({ ...updatedPost, id })); // Dodajemy id do aktualizowanego postu
    navigate('/');
  };

  return (
    <PostForm 
      action={handleSubmit} 
      actionText="Edit post"
      title={post.title}
      author={post.author}
      publishedDate={post.publishedDate}
      shortDescription={post.shortDescription}
      content={post.content}
    />
  );
};

export default EditPostForm;

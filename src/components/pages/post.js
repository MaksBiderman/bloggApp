import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Post = () => {
  const { id } = useParams();
  const post = useSelector(state => state.posts.find(post => post.id === id));

  if (!post) return <p>Post not found</p>;

  return (
    <div className="card">
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <p>{post.publishedDate}</p>
      <p>{post.author}</p>
    </div>
  );
}

export default Post;
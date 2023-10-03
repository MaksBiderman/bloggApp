import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAllPosts } from '../../redux/postsRedux';
import { Link } from 'react-router-dom';
import { dateToStr } from '../../utils/dateToStr';

const CategoryPosts = () => {
  const { categoryName } = useParams();
  const posts = useSelector(getAllPosts).filter(post => post.category.toLowerCase() === categoryName);

  return (
    <div className="row">
      {posts.map(post => (
        <div key={post.id} className="col-md-4 mb-3">
          <div className="card" style={{borderRadius: '5px', borderColor: '#e0e0e0'}}>
            <div className="card-body">
              <h2 className="card-title">{post.title}</h2>
              <p className="card-text">{post.shortDescription}</p>
              <p className="card-text">{post.content}</p>
              <p className="card-text">{dateToStr(post.publishedDate)}</p>
              <p className="card-text"><strong>Category:</strong> {post.category}</p>
              <p className="card-text">{post.author}</p>
              <Link to={`/post/${post.id}`} className="btn btn-primary">Read more</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CategoryPosts;

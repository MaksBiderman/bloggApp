import { useSelector } from 'react-redux';
import { getAllPosts } from '../../../redux/postsRedux';
import { Link } from 'react-router-dom';
import { dateToStr } from '../../../utils/dateToStr'; // Zaimportuj funkcję dateToStr

const Posts = () => {

  const posts = useSelector(getAllPosts);

  return (
    <div className="row">
      {posts.map(post => (
        <div key={post.id} className="col-md-4 mb-3">
          <div className="card" style={{borderRadius: '5px', borderColor: '#e0e0e0'}}>
            <div className="card-body">
              <h2 className="card-title">{post.title}</h2>
              <p className="card-text">{post.shortDescription}</p>
              <p className="card-text">{post.content}</p>
              <p className="card-text">{dateToStr(post.publishedDate)}</p> {/* Użyj funkcji dateToStr do konwersji daty */}
              <p className="card-text">{post.author}</p>
              <Link to={`/post/${post.id}`} className="btn btn-primary">Read more</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Posts;
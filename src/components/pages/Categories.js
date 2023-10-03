import { useSelector } from 'react-redux';
import { getCategories } from '../../redux/postsRedux';
import { Link } from 'react-router-dom';

const Categories = () => {
  const categories = useSelector(getCategories);

  return (
    <div className="container mt-4">
      <h2>Categories</h2>
      <div className="row">
        {categories.map(category => (
          <div key={category} className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">
                  <Link to={`/category/${category.toLowerCase()}`}>{category}</Link>
                </h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Categories;

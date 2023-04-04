import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categoriesSlice';

const Categories = () => {
  // Connect to store and access to state variable
  const { value, isLoading } = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  return (
    <section className="categories-section">
      {isLoading ? <h1>Loading...</h1> : <button type="button" onClick={() => dispatch(checkStatus())}>Check Status</button>}
      <h2>{value}</h2>
    </section>
  );
};

export default Categories;

import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categoriesSlice';

const Categories = () => {
  const categories = useSelector((state) => state.categories);
  const dispatch = useDispatch();

  return (
    <>
      <button type="button" onClick={() => dispatch(checkStatus())}>Check Status</button>
      <h2>{categories.value}</h2>
    </>
  );
};

export default Categories;

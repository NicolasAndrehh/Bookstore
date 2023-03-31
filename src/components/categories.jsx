import { useState } from 'react';
import { useSelector } from 'react-redux';

const Categories = () => {
  const categories = useSelector((state) => state.categories);
  const [showStatus, setShowStatus] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setShowStatus(true)}>Check Status</button>
      {showStatus ? <p>{categories.status}</p> : null}
    </>
  );
};

export default Categories;

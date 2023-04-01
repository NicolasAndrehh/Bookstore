import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { getBooklist, removeBook } from '../redux/booklist/actions';

// Use dispatch and removeBook reducer to remove a book
const Book = ({ title, author, itemId }) => {
  const dispatch = useDispatch();
  const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';

  const handleRemove = () => {
    dispatch(removeBook({ URL, itemId }))
      .then(() => {
        dispatch(getBooklist(URL));
      });
  };

  return (
    <div className="book-container">
      <p>{title}</p>
      <p>{author}</p>
      <button type="button" onClick={() => handleRemove()}>Remove</button>
    </div>
  );
};
Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  itemId: PropTypes.string.isRequired,
};

export default Book;

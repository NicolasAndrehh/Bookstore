import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { getBooklist, removeBook } from '../redux/booklist/actions';

// Use dispatch and removeBook reducer to remove a book
const Book = ({
  title, author, category, itemId,
}) => {
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
      <div className="book-info">
        <p className="category">{category || 'Not specified'}</p>
        <p className="title">{title}</p>
        <p className="author">{author}</p>
        <ul className="actions">
          <li>
            <button type="button">Comments</button>
          </li>
          <div className="vertical-divider" />
          <li>
            <button type="button" onClick={() => handleRemove()}>Remove</button>
          </li>
          <div className="vertical-divider" />
          <li>
            <button type="button">Edit</button>
          </li>
        </ul>
      </div>

      <div className="progress-container">

        <div className="progress-info">

          <div className="circular-progress-container">
            <div className="circular-progress" />
          </div>
          <div className="progress-number">
            <h4>64%</h4>
            <p>Completed</p>
          </div>

        </div>

        <div className="progress-divider" />

        <div className="chapter-info">
          <h4>Current Chapter</h4>
          <p>Chapter 1</p>
          <button type="button">Update progress</button>
        </div>

      </div>
    </div>
  );
};

Book.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  itemId: PropTypes.string.isRequired,
};

export default Book;

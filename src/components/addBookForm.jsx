import { useState } from 'react';
import { useDispatch } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { v4 as uuid } from 'uuid';
import { addBook, getBooklist } from '../redux/booklist/actions';

const AddBookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();
  const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';

  const handleSubmit = (e) => {
    e.preventDefault();
    const itemId = uuid();

    // Use dispatch and addBook reducer to add a new book
    dispatch(addBook({
      URL,
      newBook: {
        item_id: itemId,
        title,
        author,
        category: '',
      },
    })).then(() => {
      dispatch(getBooklist(URL));
    });

    setTitle('');
    setAuthor('');
  };

  return (
    <form action="" onSubmit={(e) => handleSubmit(e)} className="add-book-form">
      <h2 className="form-header">Add new book</h2>
      <div className="inputs-container">
        <input type="text" placeholder="Book title" className="title-input" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <input type="text" placeholder="Author" className="author-input" value={author} onChange={(e) => setAuthor(e.target.value)} required />
        <button type="submit" className="submit-button">Add book</button>
      </div>
    </form>
  );
};

export default AddBookForm;

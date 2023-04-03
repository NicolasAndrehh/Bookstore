import { useState } from 'react';
import { useDispatch } from 'react-redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import { v4 as uuid } from 'uuid';
import { addBook } from '../redux/booklist/booklistSlice';

const AddBookForm = () => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = uuid();

    // Use dispatch and addBook reducer to add a new book
    dispatch(addBook({ title, author, id }));
    setTitle('');
    setAuthor('');
  };

  return (
    <form action="" onSubmit={(e) => handleSubmit(e)}>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} required />
      <button type="submit">Add book</button>
    </form>
  );
};

export default AddBookForm;

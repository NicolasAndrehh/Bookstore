import PropTypes from 'prop-types';
import { useState } from 'react';

const AddBookForm = ({ booklist, setBooklist }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = booklist.length;
    setBooklist([...booklist, { title, author, id }]);
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

AddBookForm.propTypes = {

  booklist: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
  })).isRequired,

  setBooklist: PropTypes.func.isRequired,
};

export default AddBookForm;

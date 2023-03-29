import { useState } from 'react';
import AddBookForm from './addBookForm';
import Book from './book';

const Booklist = () => {
  // eslint-disable-next-line no-unused-vars
  const [booklist, setBooklist] = useState([{
    title: 'Boku no hero',
    author: 'Kōhei Horikoshi',
    id: 0,
  }]);

  return (
    <section className="booklist-section">
      {booklist.map((book) => (
        <Book key={book.id} title={book.title} author={book.author} />
      ))}

      <AddBookForm booklist={booklist} setBooklist={setBooklist} />
    </section>
  );
};

export default Booklist;

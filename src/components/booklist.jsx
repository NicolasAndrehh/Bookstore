import { useState } from 'react';
import AddBookForm from './addBookForm';

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
        <div key={book.id}>
          <p>{book.title}</p>
          <p>{book.author}</p>
        </div>
      ))}

      <AddBookForm booklist={booklist} setBooklist={setBooklist} />
    </section>
  );
};

export default Booklist;

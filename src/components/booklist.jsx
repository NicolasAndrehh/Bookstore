import { useSelector } from 'react-redux';
import AddBookForm from './addBookForm';
import Book from './book';

const Booklist = () => {
  const booklist = useSelector((state) => state.booklist.value);

  return (
    <section className="booklist-section">
      {booklist.map((book) => (
        <Book key={book.id} title={book.title} author={book.author} id={book.id} />
      ))}

      <AddBookForm />
    </section>
  );
};

export default Booklist;

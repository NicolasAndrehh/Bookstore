import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import AddBookForm from './addBookForm';
import Book from './book';
import { getBooklist } from '../redux/booklist/actions';

const Booklist = () => {
  const booklist = useSelector((state) => state.booklist.data);
  const isLoading = useSelector((state) => state.booklist.isLoading);
  const isSuccess = useSelector((state) => state.booklist.isSuccess);
  const errorMessage = useSelector((state) => state.booklist.errorMessage);
  const dispatch = useDispatch();
  const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/';

  // Fetch API
  useEffect(() => {
    dispatch(getBooklist(URL));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Display each book if the API fetch was successful
  const books = isSuccess && Object.keys(booklist).map((key) => (
    booklist[key].map((book) => (
      <Book
        key={key}
        title={book.title}
        author={book.author}
        itemId={key}
        category={book.category}
      />
    ))
  ));

  // Display error if the API fetch wasn't successful
  const error = !isSuccess && <p>{errorMessage}</p>;

  return (
    <section className="booklist-section">

      {isLoading ? <p>Loading...</p> : null}

      {books || error}

      <AddBookForm />
    </section>
  );
};

export default Booklist;

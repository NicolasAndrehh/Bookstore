import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import Booklist from './components/booklist';
import Header from './components/header';
import Categories from './components/categories';
import './App.scss';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Header />

        <Routes>
          <Route index element={<Booklist />} />
          <Route path="/" element={<Booklist />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;

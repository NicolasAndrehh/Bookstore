import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <nav className="navbar">
      <div style={{ display: 'flex' }}>
        <h1>Bookstore</h1>
        <NavLink to="/">Books</NavLink>
        <NavLink to="/categories">Categories</NavLink>
      </div>
    </nav>
  </header>
);

export default Header;

import { NavLink } from 'react-router-dom';

const Header = () => (
  <nav className="navbar">
    <div className="nav-links">
      <h1>Bookstore CMS</h1>
      <NavLink to="/">Books</NavLink>
      <NavLink to="/categories">Categories</NavLink>
    </div>
  </nav>
);

export default Header;

import { NavLink } from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import PersonIcon from '@mui/icons-material/Person';

const Header = () => (
  <nav className="navbar">
    <div className="nav-links">
      <h1>Bookstore CMS</h1>
      <NavLink to="/">Books</NavLink>
      <NavLink to="/categories">Categories</NavLink>
    </div>
    <button type="button" className="icon-button">
      <PersonIcon />
    </button>
  </nav>
);

export default Header;

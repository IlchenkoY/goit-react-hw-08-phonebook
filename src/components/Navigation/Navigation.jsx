import { Link, NavItem, NavList } from './Navigation.styled';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/auth/authSelectors';

const Navigation = () => {
  const location = useLocation();
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <nav>
      <NavList>
        <NavItem>
          <Link to="/" state={{ from: location }}>
            Home Page
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/contacts" state={{ from: location }}>
            {isLoggedIn && <span>Contacts</span>}
          </Link>
        </NavItem>
      </NavList>
    </nav>
  );
};
export { Navigation };

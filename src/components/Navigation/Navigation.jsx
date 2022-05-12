import { Link, NavItem, NavList } from './Navigation.styled';
import { useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();
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
            Contacts
          </Link>
        </NavItem>
      </NavList>
    </nav>
  );
};
export { Navigation };

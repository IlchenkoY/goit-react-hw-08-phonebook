import { Link, NavItem, NavList } from './AuthNav.styled';
import { useLocation } from 'react-router-dom';

const AuthNav = () => {
  const location = useLocation();
  return (
    <nav>
      <NavList>
        <NavItem>
          <Link to="/register" state={{ from: location }}>
            Sign up
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/login" state={{ from: location }}>
            Log in
          </Link>
        </NavItem>
      </NavList>
    </nav>
  );
};
export { AuthNav };

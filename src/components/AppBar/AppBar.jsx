import { useSelector } from 'react-redux';
import { Navigation } from '../Navigation/Navigation';
import { AuthNav } from '../AuthNav/AuthNav';
import { UserMenu } from '../UserMenu/UserMenu';
import { Header } from './AppBar.styled';
import { getIsLoggedIn } from '../../redux/auth/authSelectors';

export default function AppBar() {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <Header>
      <Navigation />

      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </Header>
  );
}

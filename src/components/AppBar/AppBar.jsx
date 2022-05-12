import { useSelector } from 'react-redux';
import { Navigation } from '../Navigation/Navigation';
import { AuthNav } from '../AuthNav/AuthNav';
import { UserMenu } from '../UserMenu/UserMenu';
import { Header } from './AppBar.styled';

export default function AppBar() {
  const isLoggedIn = useSelector(state => state.authorization.isLoggedIn);
  return (
    <Header>
      <Navigation />
      <AuthNav />
      {isLoggedIn && <UserMenu />}
    </Header>
  );
}

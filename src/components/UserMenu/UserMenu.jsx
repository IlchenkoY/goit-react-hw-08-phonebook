import { useDispatch } from 'react-redux';
import { useLogoutUserMutation, logoutAction } from '../../redux/auth/authApi';
import { Button } from './UserMenu.styled';

const UserMenu = () => {
  const [LogoutUser] = useLogoutUserMutation();

  const dispatch = useDispatch();

  const logOutHandler = async () => {
    try {
      await LogoutUser();
      dispatch(logoutAction());
    } catch (error) {
      console.log('ERROR');
    }
  };

  return (
    <>
      <Button type="button" onClick={logOutHandler}>
        Log out
      </Button>
    </>
  );
};

export { UserMenu };

import { useLogoutUserMutation } from '../../redux/auth/authApi';

const UserMenu = () => {
  const [LogoutUser] = useLogoutUserMutation();

  const logOutHandler = async () => {
    try {
      await LogoutUser();
    } catch (error) {
      console.log('ERROR');
    }
  };

  return (
    <>
      <span>Welcome</span>
      <button type="button" onClick={logOutHandler}>
        Log out
      </button>
    </>
  );
};

export { UserMenu };

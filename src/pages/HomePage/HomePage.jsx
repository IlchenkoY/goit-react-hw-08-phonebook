import { useSelector } from 'react-redux';
import { Button, H1, Span } from './HomePage.styled';
import { ReactComponent as PhoneBookIcon } from '../../icons/phone-book_icon-icons.com_56484.svg';

const HomePage = () => {
  const userName = useSelector(state => state.authorization.user.name);

  return (
    <>
      <H1>Your PhoneBook</H1>
      <PhoneBookIcon width="35" height="35" />
      {userName ? (
        <Span>Welcome {userName}</Span>
      ) : (
        <Button type="button">Try it now</Button>
      )}
    </>
  );
};

export { HomePage };

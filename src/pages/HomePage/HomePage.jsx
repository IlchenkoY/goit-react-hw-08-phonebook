import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { H1, Span, Link } from './HomePage.styled';
import { ReactComponent as PhoneBookIcon } from '../../icons/phone-book_icon-icons.com_56484.svg';

const HomePage = () => {
  const location = useLocation();
  const userName = useSelector(state => state.authorization.user.name);

  return (
    <>
      <H1>Your PhoneBook</H1>
      <PhoneBookIcon width="35" height="35" />
      {userName ? (
        <Span>Welcome {userName}</Span>
      ) : (
        <Link to="/register" state={{ from: location }}>
          Try it now
        </Link>
      )}
    </>
  );
};

export { HomePage };

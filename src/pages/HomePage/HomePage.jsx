import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { H1, Span, Link } from './HomePage.styled';
import { getUserName } from '../../redux/auth/authSelectors';
import { ReactComponent as PhoneBookIcon } from '../../icons/phone-book_icon-icons.com_56484.svg';

export default function HomePage() {
  const location = useLocation();
  const userName = useSelector(getUserName);

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
}

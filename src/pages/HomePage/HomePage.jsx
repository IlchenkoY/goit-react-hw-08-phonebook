import { Button, H1 } from './HomePage.styled';
import { ReactComponent as PhoneBookIcon } from '../../icons/phone-book_icon-icons.com_56484.svg';

const HomePage = () => {
  return (
    <>
      <H1>Your PhoneBook</H1>
      <PhoneBookIcon width="35" height="35" />
      <Button type="button">Try it now</Button>
    </>
  );
};

export { HomePage };

import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import { useDeleteTodoMutation } from '../../redux/contacts/contactsApi';
import { Button } from './ContactListItem.styled';
import { ReactComponent as DeleteIcon } from '../../icons/1485477104-basket_78591.svg';

const ContactListItem = ({ id, name, number }) => {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteTodoMutation();

  return (
    <>
      {name}: {number}
      <Button
        type="button"
        disabled={isDeleting}
        onClick={() => deleteContact(id)}
      >
        {isDeleting ? (
          <Loader
            className="loader"
            type="Rings"
            color="orange"
            height={25}
            width={25}
          />
        ) : (
          <DeleteIcon width="25" height="25" />
        )}
      </Button>
    </>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export { ContactListItem };

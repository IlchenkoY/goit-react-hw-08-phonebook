import { useSelector } from 'react-redux';
import { useFetchContactsQuery } from '../../redux/contacts/contactsApi';
import { getFilter, getFilteredContacts } from '../../redux/filter/selectors';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import { List, ListItem } from './ContactList.styled';

const ContactList = () => {
  const { data = [], error } = useFetchContactsQuery();
  const filter = useSelector(getFilter);
  let filteredContacts = getFilteredContacts(data, filter);

  if (error !== undefined) {
    if (error.status === 404) {
      filteredContacts = [];
      return <></>;
    }
  }

  return (
    <List>
      {filteredContacts
        .sort((a, b) => a.name.localeCompare(b.name))
        .map(({ id, name, number }) => (
          <ListItem key={id}>
            <ContactListItem name={name} number={number} id={id} />
          </ListItem>
        ))}
    </List>
  );
};

export { ContactList };

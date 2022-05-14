import { useSelector } from 'react-redux';
import { useFetchContactsQuery } from '../../redux/contacts/contactsApi';
import {
  getFilter,
  getFilteredContacts,
} from '../../redux/filter/filterSelectors';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import { List, ListItem } from './ContactList.styled';

const ContactList = () => {
  const filter = useSelector(getFilter);

  const { data = [] } = useFetchContactsQuery();
  let filteredContacts = getFilteredContacts(data, filter);

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

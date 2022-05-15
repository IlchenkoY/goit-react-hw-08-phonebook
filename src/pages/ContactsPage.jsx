import Loader from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { useFetchContactsQuery } from '../redux/contacts/contactsApi';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/Contactlist/ContactList';
import { Filter } from '../components/Filter/Filter';
import { getToken } from '../redux/auth/authSelectors';
import {
  getFilter,
  getFilteredContacts,
} from '../redux/filter/filterSelectors';

export default function ContactsPage() {
  const token = useSelector(getToken);

  const filter = useSelector(getFilter);

  const {
    data = [],
    isFetching,
    isSuccess,
  } = useFetchContactsQuery(token, {
    skip: token === null,
  });

  const filteredContacts =
    token === null ? [] : getFilteredContacts(data, filter);

  return (
    <>
      <ContactForm />
      <h2>Your Contacts</h2>
      <Filter />
      {filteredContacts.length === 0 && isSuccess && (
        <p>You have no contacts yet</p>
      )}
      {isFetching && data.length === 0 && (
        <Loader
          className="loader"
          type="Rings"
          color="orange"
          height={100}
          width={100}
        />
      )}
      {filteredContacts.length !== 0 && <ContactList />}
    </>
  );
}

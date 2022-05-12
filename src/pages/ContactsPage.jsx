import Loader from 'react-loader-spinner';
import { useSelector } from 'react-redux';
import { useFetchContactsQuery } from '../redux/contacts/contactsApi';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/Contactlist/ContactList';
import { Filter } from '../components/Filter/Filter';
import { getFilter, getFilteredContacts } from '../redux/filter/selectors';

const ContactsPage = () => {
  const { data = [], isFetching } = useFetchContactsQuery();
  const filter = useSelector(getFilter);
  const filteredContacts = getFilteredContacts(data, filter);

  return (
    <>
      <ContactForm />
      <h2>Your Contacts</h2>
      {data.length > 0 && <Filter />}
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
      {data.length === 0 && !isFetching && <p>You have no contacts yet</p>}
    </>
  );
};

export { ContactsPage };

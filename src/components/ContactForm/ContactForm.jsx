import { useState } from 'react';
import toast from 'react-hot-toast';
import {
  useAddContactMutation,
  useFetchContactsQuery,
} from '../../redux/contacts/contactsApi';
import { Form, Input, Label, Button } from './ContactForm.styled';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const [addContact] = useAddContactMutation();
  const { data = [] } = useFetchContactsQuery();

  const submitHandler = async e => {
    e.preventDefault();
    if (
      data.find(
        contactsEl => contactsEl.name.toLowerCase() === name.toLowerCase(),
      )
    ) {
      toast.error(`${name.toLocaleUpperCase()} is already in contacts!`);
      return;
    }
    try {
      await addContact({ name, number });
    } catch (error) {
      console.log('ERROR');
    }
    reset();
  };

  const formHandler = e => {
    switch (e.target.name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;

      default:
        return;
    }
  };

  const reset = () => {
    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={submitHandler}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          value={name}
          placeholder="Enter contact name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={formHandler}
          required
        />
      </Label>
      <Label>
        Number
        <Input
          type="tel"
          name="number"
          value={number}
          placeholder="Enter contact number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          onChange={formHandler}
          required
        />
      </Label>

      <Button type="submit">Add contact</Button>
    </Form>
  );
};

export { ContactForm };

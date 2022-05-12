import { useState } from 'react';
// import {
//   useAddContactMutation,
//   useFetchContactsQuery,
// } from '../../redux/contactsApi';
import { useLoginUserMutation } from '../redux/auth/authApi';

import { Button } from '../components/ContactListItem/ContactListItem.styled';
import {
  Form,
  Input,
  Label,
} from '../components/ContactForm/ContactForm.styled';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loginUser] = useLoginUserMutation();
  //   const [addContact] = useAddContactMutation();
  //   const { data = [] } = useFetchContactsQuery();

  const submitHandler = async e => {
    e.preventDefault();
    // if (
    //   data.find(
    //     contactsEl => contactsEl.name.toLowerCase() === name.toLowerCase(),
    //   )
    // ) {
    //   alert(`${name.toLocaleUpperCase()} is already in contacts!`);
    //   return;
    // }
    try {
      await loginUser({ email, password });
    } catch (error) {
      console.log('ERROR');
    }
    reset();
  };

  const formHandler = e => {
    switch (e.target.name) {
      case 'email':
        setEmail(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;

      default:
        return;
    }
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };

  return (
    <Form onSubmit={submitHandler}>
      <Label>
        Email
        <Input
          type="email"
          name="email"
          value={email}
          placeholder="Your e-mail"
          title="email should contain symbol @"
          onChange={formHandler}
          required
        />
      </Label>
      <Label>
        Password (8 characters minimum)
        <Input
          type="password"
          name="password"
          value={password}
          placeholder="Your password"
          title="password should contain 8 characters minimum"
          minlength="8"
          onChange={formHandler}
          required
        />
      </Label>

      <Button type="submit">Add contact</Button>
    </Form>
  );
};

export { LoginForm };

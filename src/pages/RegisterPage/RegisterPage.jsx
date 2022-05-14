import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRegisterUserMutation, authAction } from '../../redux/auth/authApi';
// import { Button } from '../../components/ContactListItem/ContactListItem.styled';
import { ShowPasswordButton, Button } from './PasswordButton.styled';
import {
  Form,
  Input,
  Label,
} from '../../components/ContactForm/ContactForm.styled';

const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);

  const [registerUser] = useRegisterUserMutation();
  const dispatch = useDispatch();

  const handleClick = () => setShow(!show);

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
      const data = await registerUser({ name, email, password });
      dispatch(authAction(data));
      console.log(data);
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
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Form onSubmit={submitHandler}>
      <Label>
        Name
        <Input
          type="text"
          name="name"
          value={name}
          placeholder="Enter your name"
          title="Enter your name"
          onChange={formHandler}
          required
        />
      </Label>
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
          type={show ? 'text' : 'password'}
          name="password"
          value={password}
          placeholder="Your password"
          title="password should contain 8 characters minimum"
          minlength="8"
          onChange={formHandler}
          required
        />
        <ShowPasswordButton type="button" onClick={handleClick}>
          {show ? 'Hide Password' : 'Show Password'}
        </ShowPasswordButton>
      </Label>

      <Button type="submit">Sign in</Button>
    </Form>
  );
};

export { RegisterForm };

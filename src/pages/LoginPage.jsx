import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLoginUserMutation, authAction } from '../redux/auth/authApi';
import { Button } from '../components/ContactForm/ContactForm.styled';
import { ShowPasswordButton } from './RegisterPage/PasswordButton.styled';
import {
  Form,
  Input,
  Label,
} from '../components/ContactForm/ContactForm.styled';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);

  const [loginUser] = useLoginUserMutation();
  const dispatch = useDispatch();

  const handleClick = () => setShow(!show);

  const submitHandler = async e => {
    e.preventDefault();
    try {
      const data = await loginUser({ email, password });
      dispatch(authAction(data));
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

      <Button type="submit">Log in</Button>
    </Form>
  );
};

export { LoginForm };

import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Container } from './components/Container/Container';
import { ContactsPage } from './pages/ContactsPage';
import { LoginForm } from './pages/LoginPage';
import { RegisterForm } from './pages/RegisterPage/RegisterPage';
import AppBar from './components/AppBar/AppBar';
import { HomePage } from './pages/HomePage/HomePage';
import {
  useFetchCurrentUserQuery,
  getCurrentUserAction,
} from './redux/auth/authApi';

const App = () => {
  const dispatch = useDispatch();

  const token = useSelector(state => state.authorization.token);
  const { data } = useFetchCurrentUserQuery(token, {
    skip: token === null,
  });

  useEffect(() => {
    if (data) {
      dispatch(getCurrentUserAction(data));
    }
  }, [data, dispatch]);

  return (
    <Container>
      <AppBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contacts" element={<ContactsPage />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
      </Routes>
    </Container>
  );
};

export { App };

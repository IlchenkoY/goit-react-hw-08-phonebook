import { Routes, Route } from 'react-router-dom';

import { Container } from './components/Container/Container';
import { ContactsPage } from './pages/ContactsPage';
import { LoginForm } from './pages/LoginPage';
import { RegisterForm } from './pages/RegisterPage/RegisterPage';
import AppBar from './components/AppBar/AppBar';
import { HomePage } from './pages/HomePage/HomePage';

const App = () => {
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

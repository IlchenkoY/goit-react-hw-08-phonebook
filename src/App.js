import Loader from 'react-loader-spinner';
import { useEffect, lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import { Container } from './components/Container/Container';
// import ContactsPage from './pages/ContactsPage';
// import { LoginForm } from './pages/LoginPage';
// import { RegisterForm } from './pages/RegisterPage/RegisterPage';
import AppBar from './components/AppBar/AppBar';
// import { HomePage } from './pages/HomePage/HomePage';
import PrivateRoute from './pages/Routes/PriveteRoute.jsx';
import PublicRoute from './pages/Routes/PublicRoute.jsx';
import { getToken } from './redux/auth/authSelectors';
import {
  useFetchCurrentUserQuery,
  getCurrentUserAction,
} from './redux/auth/authApi';

const HomePage = lazy(() =>
  import('./pages/HomePage/HomePage' /* webpackChunkName: "contacts-page" */),
);

const ContactsPage = lazy(() =>
  import('./pages/ContactsPage' /* webpackChunkName: "contacts-page" */),
);

const LoginForm = lazy(() =>
  import('./pages/LoginPage' /* webpackChunkName: "contacts-page" */),
);

const RegisterForm = lazy(() =>
  import(
    './pages/RegisterPage/RegisterPage' /* webpackChunkName: "contacts-page" */
  ),
);

export default function App() {
  const dispatch = useDispatch();

  const token = useSelector(getToken);

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
      <Suspense
        fallback={
          <Loader
            className="loader"
            type="Rings"
            color="orange"
            height={100}
            width={100}
          />
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/contacts"
            element={
              <PrivateRoute>
                <ContactsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute restricted>
                <RegisterForm />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute restricted>
                <LoginForm />
              </PublicRoute>
            }
          />
        </Routes>
      </Suspense>
      <Toaster />
    </Container>
  );
}

// export { App };

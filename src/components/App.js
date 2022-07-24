import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Toaster } from 'react-hot-toast';
import GlobalStyles from '@mui/material/GlobalStyles';
import { fetchCurrentUser } from 'redux/auth/auth-options';
import { getCurrentRefresh } from 'redux/auth/auth-selectors';
import { PrivateRoute } from './Routes/PrivateRoute';
import { PublicRoute } from './Routes/PublicRoute';
import CommonCss from './CommonCss/CommonCss';
import Loader from './Loader/Loader';

const AppBar = lazy(() => import('./AppBar/AppBar'));
const ContactsView = lazy(() => import('views/ContactsView'));
const RegisterView = lazy(() => import('views/RegisterView'));
const LoginView = lazy(() => import('views/LoginView'));
const HomeView = lazy(() => import('views/HomeView'));


export default function App() {
  const dispatch = useDispatch();
  const refresh = useSelector(getCurrentRefresh);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    !refresh && (
      <>
        <Suspense fallback={<Loader />}>
          <GlobalStyles styles={CommonCss} />
          <AppBar />
          <Toaster
          position="top-right"
          reverseOrder={false}
          />
          <Routes>
            <Route>
              <Route index element={<HomeView />} />
              <Route
                path="register"
                element={<PublicRoute restricted>
                  <RegisterView />
                </PublicRoute>}
              />
              <Route
                path="login"
                element={
                  <PublicRoute restricted>
                    <LoginView />
                  </PublicRoute>}
              />
              <Route
                path="contacts"
                element={
                  <PrivateRoute>
                    <ContactsView />
                  </PrivateRoute>}
              />
              <Route path="*" element={<Navigate to="/" />} />
            </Route>
          </Routes>
        </Suspense>
      </>
    )
  );
};
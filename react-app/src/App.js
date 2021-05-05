import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UnprotectedRoute from './components/auth/UnprotectedRoute';
import { authenticate } from './store/session';
import * as sessionActions from './store/session';
import './index.css';

function App() {
<<<<<<< HEAD
    const dispatch = useDispatch();
    const [path, setPath] = useState('');
    const [authenticated, setAuthenticated] = useState(false);
    const [loaded, setLoaded] = useState(false);
    const isAuthenticated = useSelector((state) =>
        state.session.user ? !state.session.user.errors : null
    );

    useEffect(() => {
        const user = authenticate();
        console.log(isAuthenticated);
        if (!user.errors) {
            dispatch(sessionActions.restoreUser());
            setAuthenticated(true);
        }
        setLoaded(true);
    });
=======
  const dispatch = useDispatch();
  const [path, setPath] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const user = useSelector((state) => state.session.user);
  const isAuthenticated = user ? !!user.errors : false;
  useEffect(() => {
    const user = authenticate();
    console.log(isAuthenticated);
    if (!user.errors) {
      dispatch(sessionActions.restoreUser());
      setAuthenticated(true);
    }
    setLoaded(true);
  }, []);
>>>>>>> 75386b3192bce9af7ea4b3e5787716e867761267

    useEffect(() => {
        setPath(window.location.pathname);
    }, [loaded]);

<<<<<<< HEAD
    if (!loaded) {
        return null;
    }

    return (
        <>
            <NavBar
                authenticated={authenticated}
                setAuthenticated={setAuthenticated}
            />
            <Switch>
                <LandingPage
                    exact
                    path="/"
                    exact={true}
                    authenticated={isAuthenticated}
                />
                <UnprotectedRoute
                    path="/login"
                    exact={true}
                    authenticated={isAuthenticated}
                >
                    <LoginForm
                        authenticated={isAuthenticated}
                        setAuthenticated={setAuthenticated}
                        setPath={setPath}
                    />
                </UnprotectedRoute>
                <UnprotectedRoute
                    exact
                    path="/signup"
                    exact={true}
                    authenticated={isAuthenticated}
                >
                    <SignUpForm
                        authenticated={isAuthenticated}
                        setAuthenticated={setAuthenticated}
                        setPath={setPath}
                    />
                </UnprotectedRoute>
                <ProtectedRoute
                    path="/dashboard"
                    exact={true}
                    authenticated={isAuthenticated}
                >
                    <Dashboard setPath={setPath} />
                </ProtectedRoute>
            </Switch>
            <Footer path={path} />
        </>
    );
=======
  if (!loaded || !user) {
    return null;
  }

  return (
    <>
      <NavBar
        authenticated={authenticated}
        setAuthenticated={setAuthenticated}
      />
      <div className="content">
        <Switch>
          <UnprotectedRoute
            path="/login"
            exact={true}
            authenticated={isAuthenticated}
          >
            <LoginForm
              authenticated={isAuthenticated}
              setAuthenticated={setAuthenticated}
              setPath={setPath}
            />
          </UnprotectedRoute>
          <UnprotectedRoute
            exact
            path="/"
            exact={true}
            authenticated={isAuthenticated}
          >
            <SignUpForm
              authenticated={isAuthenticated}
              setAuthenticated={setAuthenticated}
              setPath={setPath}
            />
          </UnprotectedRoute>
          <ProtectedRoute
            path="/dashboard"
            exact={true}
            authenticated={isAuthenticated}
          >
            <Dashboard setPath={setPath} />
          </ProtectedRoute>
        </Switch>
      </div>
      <Footer path={path} />
    </>
  );
>>>>>>> 75386b3192bce9af7ea4b3e5787716e867761267
}

export default App;

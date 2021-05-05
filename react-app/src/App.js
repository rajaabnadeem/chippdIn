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

    useEffect(() => {
        setPath(window.location.pathname);
    }, [loaded]);

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
                <Route exact path="/" exact={true}>
                    <LandingPage authenticated={isAuthenticated} />
                </Route>
                <Route path="/login">
                    <LoginForm
                        authenticated={isAuthenticated}
                        setAuthenticated={setAuthenticated}
                        setPath={setPath}
                    />
                </Route>
                <Route path="/signup">
                    <SignUpForm
                        authenticated={isAuthenticated}
                        setAuthenticated={setAuthenticated}
                        setPath={setPath}
                    />
                </Route>
                <Route
                    path="/dashboard"
                    exact={true}
                    authenticated={isAuthenticated}
                >
                    <Dashboard setPath={setPath} />
                </Route>
            </Switch>
            <Footer path={path} />
        </>
    );
}

export default App;

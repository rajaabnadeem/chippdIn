import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import Dashboard from './components/dashboard';
import LandingPage from './components/LandingPage';
import { authenticate } from './store/session';
import * as sessionActions from './store/session';
import * as groupActions from './store/groups';
import './index.css';

function App() {
    const dispatch = useDispatch();
    const [authenticated, setAuthenticated] = useState(false);
    const [loaded, setLoaded] = useState(false);

    useEffect(async () => {
        const user = await authenticate();
        if (!user.errors) {
            dispatch(sessionActions.restoreUser());
            dispatch(groupActions.getUserGroups(user.id));
            setAuthenticated(true);
        }
        setLoaded(true);
    }, [dispatch]);

    if (!loaded) {
        return null;
    }

    return (
        <>
            <NavBar setAuthenticated={setAuthenticated} />
            <Switch>
                <Route path="/login" exact={true}>
                    <LoginForm
                        authenticated={authenticated}
                        setAuthenticated={setAuthenticated}
                    />
                </Route>
                <Route path="/sign-up" exact={true}>
                    <SignUpForm
                        authenticated={authenticated}
                        setAuthenticated={setAuthenticated}
                    />
                </Route>
                <Route path="/dashboard">
                    <Dashboard />
                </Route>
                <Route path="/" exact={true} authenticated={authenticated}>
                    <LandingPage />
                </Route>
                <Route>Page Not Found</Route>
            </Switch>
        </>
    );
}

export default App;

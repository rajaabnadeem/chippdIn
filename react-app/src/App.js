import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import LandingPage from './components/LandingPage';
import Dashboard from './components/Dashboard';
import Transactions from './components/Transactions';
import Group from './components/grp/Group';
import Footer from './components/Footer';
import Comment from './components/cmt/Comment';
import CommentContainer from './components/cmt/CommentContainer';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import { authenticate } from './store/session';
import * as sessionActions from './store/session';
import './index.css';

function App() {
    const dispatch = useDispatch();
    const [authenticated, setAuthenticated] = useState(false);
    const [loaded, setLoaded] = useState(false);

    useEffect(async () => {
        const user = await authenticate();
        if (!user.errors) {
            dispatch(sessionActions.restoreUser());
            setAuthenticated(true);
        }
        setLoaded(true);
    }, [dispatch]);

    if (!loaded) {
        return null;
    }

    return (
        <>
            {/* {Temporary routes for comments go here} */}
            <Route path="/comment">
                {/* <Comment /> */}
                <CommentContainer />
            </Route>
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
                <Route path="/groups">{/* <Group /> */}</Route>

                <ProtectedRoute
                    path="/dashboard"
                    exact={true}
                    authenticated={authenticated}
                >
                    <Dashboard />
                </ProtectedRoute>

                <ProtectedRoute
                    path="/"
                    exact={true}
                    authenticated={authenticated}
                >
                    <LandingPage />
                </ProtectedRoute>
            </Switch>
            {/* <Footer /> */}
        </>
    );
}

export default App;

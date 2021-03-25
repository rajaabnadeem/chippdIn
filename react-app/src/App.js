import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import ExpenseForm from './components/Expense/ExpenseForm';
import ExpenseDetails from './components/Expense/ExpenseDetails';
import Group from './components/Group';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import Dashboard from './components/dashboard';
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
            <NavBar setAuthenticated={setAuthenticated} />
            <Switch>
                {/*route for testing groups, temporary */}
                <ProtectedRoute
                    path="/groups"
                    exact={true}
                    authenticated={authenticated}
                >
                    <Group />
                    <ExpenseDetails />
                </ProtectedRoute>
                <Route path="/login" exact={true}>
                    <LoginForm
                        authenticated={authenticated}
                        setAuthenticated={setAuthenticated}
                    />
                </Route>
                <Route path="/dashboard">
                    <Dashboard />
                </Route>
                <Route path="/sign-up" exact={true}>
                    <SignUpForm
                        authenticated={authenticated}
                        setAuthenticated={setAuthenticated}
                    />
                </Route>
                <ProtectedRoute
                    path="/users"
                    exact={true}
                    authenticated={authenticated}
                >
                    <UsersList />
                </ProtectedRoute>
                <ProtectedRoute
                    path="/users/:userId"
                    exact={true}
                    authenticated={authenticated}
                >
                    <User />
                </ProtectedRoute>

                <ProtectedRoute
                    path="/expenses/expense-form"
                    exact={true}
                    authenticated={authenticated}
                >
                    <ExpenseForm />
                </ProtectedRoute>

                <ProtectedRoute
                    path="/"
                    exact={true}
                    authenticated={authenticated}
                >
                    <h1>My Home Page</h1>
                </ProtectedRoute>
            </Switch>
        </>
    );
}

export default App;

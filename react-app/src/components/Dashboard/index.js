import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Group from '../grp/Group';
import NewGroup from '../grp/NewGroup';
<<<<<<< HEAD
import ExpenseForm from '../exp/ExpenseForm';
import ExpenseDetails from '../exp/ExpenseDetails';
import Transactions from '../Transactions';
import { getUserGroups, createGroup } from '../../store/groups';
import { getComments } from '../../store/comments';
import { getTransactions } from '../../store/transactions';
import './dashboard.css';

const Dashboard = ({ setPath }) => {
    const sessionGroups = useSelector((state) => state.groups);
=======
import { getUserGroups } from '../../store/groups';

const Dashboard = () => {
>>>>>>> main
    const dispatch = useDispatch();
    const user = useSelector((state) => state.session.user);
    const groups = useSelector((state) => state.groups);

    let userId;
    if (user) {
        userId = user.id;
    }

    useEffect(() => {
        if (userId) {
            dispatch(getUserGroups(user.id));
        }
<<<<<<< HEAD
        setPath(window.location.pathname);
    }, [dispatch, user]);
=======
    }, [dispatch, user, userId]);
>>>>>>> main

    return (
        <div className="dashboard-container">
            <div className="left-dash">
                <h1>NEW GROUP</h1>
                <NewGroup />
            </div>
            <div className="center-dash">
                <div className="groups-container">
                    {groups &&
                        Object.values(groups).map((group) => (
                            <Group
                                value={group.name}
                                key={group.id}
                                className="group-component"
                                group={group}
                            />
                        ))}
                </div>
            </div>
            <div className="right-dash"></div>
        </div>
    );
};

export default Dashboard;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Group from '../grp/Group';
import NewGroup from '../grp/NewGroup';
import ExpenseForm from '../exp/ExpenseForm';
import ExpenseDetails from '../exp/ExpenseDetails';
import Transactions from '../Transactions';
import { getUserGroups, createGroup } from '../../store/groups';
import { getComments } from '../../store/comments';
import { getTransactions } from '../../store/transactions';
import './dashboard.css';

const Dashboard = ({ setPath }) => {
    const sessionGroups = useSelector((state) => state.groups);
    const dispatch = useDispatch();
    const user = useSelector((state) => state.session.user);
    const groups = useSelector((state) => state.groups);
    const userGroups = useSelector((state) => state.userGroups);

    let userId;
    if (user) {
        userId = user.id;
    }

    useEffect(() => {
        if (userId) {
            dispatch(getUserGroups(user.id));
        }
        setPath(window.location.pathname);
    }, [dispatch, user]);

    return (
        <div className="dashboard-container">
            <div className="left-dash"></div>
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

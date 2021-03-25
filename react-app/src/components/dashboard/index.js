import React, { useState, useEffect } from 'react';
import { Redirect, useHistory, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Group from '../grp/Group';
import NewGroup from '../grp/NewGroup';
import ExpenseForm from '../exp/ExpenseForm';
import ExpenseDetails from '../exp/ExpenseDetails';
import Transactions from '../Transactions';
import { getUserGroups } from '../../store/groups';
import { getComments } from '../../store/comments'

const Dashboard = ({}) => {
    const sessionGroups = useSelector((state) => state.groups);
    const dispatch = useDispatch()
    const dispatch = useDispatch();
    const user = useSelector((state) => state.session.user);
    const groups = useSelector((state) => state.groups);
  
    useEffect(() => {
        return dispatch(getComments())},
        [])

    let userId;
    if (user) {
        userId = user.id;
    }

    useEffect(() => {
        dispatch(getUserGroups(userId));
    }, []);

    return (
        <div className="dashboard-container">
            <div className="left-dash">
                <h1>NEW GROUP</h1>
                <NewGroup />
            </div>
            <div className="center-dash">
                <h1>GROUP CONTAINERS</h1>
                <div className="groups-container">
                    {groups &&
                        Object.values(groups).map((group) => (
                            <Group
                                value={group.name}
                                key={group.id}
                                className="group-component"
                                groupId={group.id}
                            />
                        ))}
                </div>
            </div>
            <div className="right-dash">
                <h1>EXPENSE FORM</h1>
                <ExpenseForm />
                <h1>EXPENSE DETAILS</h1>
                <ExpenseDetails />
            </div>
        </div>
    );
};

export default Dashboard;

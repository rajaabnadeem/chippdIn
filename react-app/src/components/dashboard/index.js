import React, { useState, useEffect } from 'react';
import { Redirect, useHistory, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Group from '../grp/Group';
import NewGroup from '../grp/NewGroup';
import ExpenseForm from '../exp/ExpenseForm';
import ExpenseDetails from '../exp/ExpenseDetails';

const Dashboard = ({}) => {
    const sessionGroups = useSelector((state) => state.groups);

    return (
        <div className="dashboard-container">
            <div className="left-dash">
                <h1>NEW GROUP</h1>
                <NewGroup />
            </div>
            <div className="center-dash">
                <h1>GROUP CONTAINERS</h1>
                <div className="groups-container">
                    {sessionGroups &&
                        Object.keys(sessionGroups).map((group, idx) => (
                            <Group
                                value={group}
                                key={idx}
                                className="group-component"
                                groupName={group.name}
                                groupType={group.type}
                                imgUrl={group.img_url}
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

import React, { useState, useEffect } from 'react';
import { Redirect, useHistory, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './Group.css';
import { getExpenses } from '../../../store/expenses';

const Group = ({ name, img_url, type }) => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.session.user);
    const expenses = useSelector((state) => state.expenses);
    let userId;
    if (user) {
        userId = user.id;
    }

    useEffect(() => {
        dispatch(getExpenses(userId, 1));
    }, []);

    const handleViewGroup = () => {
        return;
    };
    const handleViewExpense = () => {
        return;
    };
    const group_id = 2
    return (
        <div className="groupContainer">
            <div className="groupDetails">
                <img src={img_url}></img>
                <h1>{name}</h1>
                <div className="groupTypeContainer">
                    <p className="groupType">{type}</p>
                </div>
                <button onclick={handleViewGroup}>view group</button>
            </div>
            <div className="expenseDetails">
                <h1>Expense:</h1>
                <select>
                    { Object.entries(expenses).map(([key, value]) => value.group_id === group_id ? (<option key={key} value={`${key}`}>{value.description}</option>) : null
                    )}
                </select>
                <button onclick={handleViewExpense}>view expense</button>
            </div>
        </div>
    );
};

export default Group;

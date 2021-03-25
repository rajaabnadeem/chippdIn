import React, { useState, useEffect } from 'react';
import { Redirect, useHistory, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './Group.css';
import { getExpenses } from '../../store/expenses';

const Group = ({ groupName, groupType, imgUrl }) => {
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

    return (
        <div className="groupContainer">
            <div className="groupDetails">
                <img src={imgUrl}></img>
                <h1>{groupName}</h1>
                <div className="groupTypeContainer">
                    <p className="groupType">{groupType}</p>
                </div>
                <button onclick={handleViewGroup}>view group</button>
            </div>
            <div className="expenseDetails">
                <h1>Expense:</h1>
                <select>
                    <option value="expense1">expense 1</option>
                    <option value="expense2">expense 2</option>
                    <option value="expense3">expense 3</option>
                </select>
                <button onclick={handleViewExpense}>view expense</button>
            </div>
        </div>
    );
};

export default Group;

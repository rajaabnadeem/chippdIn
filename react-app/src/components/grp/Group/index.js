import React, { useState } from 'react';
import { Redirect, useHistory, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './Group.css';

const Group = ({ name, img_url, type }) => {
    const dispatch = useDispatch();
    const sessionGroups = useSelector((state) => state.session.groups);

    const handleViewGroup = () => {
        return;
    };
    const handleViewExpense = () => {
        return;
    };
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

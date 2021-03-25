import React, { useState, useEffect } from 'react';
import { Redirect, useHistory, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './Group.css';
import { getExpenses } from '../../../store/expenses';
import Transactions from '../../Transactions';
import groupsReducer from '../../../store/groups';

const Group = ({ groupId }) => {
    const dispatch = useDispatch();
    const [showTransactions, setShowTransactions] = useState(false);

    const user = useSelector((state) => state.session.user);
    const groups = useSelector((state) => state.groups); //object
    const expenses = useSelector((state) => state.expenses); // object
    const transactions = useSelector((state) => state.transactions); // object
    const transactionsArray = Object.values(transactions); // array of objs
    const expensesArray = Object.values(expenses); // array of objs
    const currGroup = Object.values(groups).map(
        (group) => group.id === groupId
    ); //obj

    const toggleTransactions = () => {
        showTransactions
            ? setShowTransactions(false)
            : setShowTransactions(true);
    };

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
    const group_id = 2;

    if (!showTransactions) {
        return (
            <div className="groupContainer">
                <div className="groupDetails">
                    <img src={currGroup.img_url}></img>
                    <h1>{currGroup.name}</h1>
                    <div className="groupTypeContainer">
                        <p className="groupType">{currGroup.type}</p>
                    </div>
                    <button onclick={handleViewGroup}>view group</button>
                </div>
                <div className="expenseDetails">
                    <h1>Expense:</h1>
                    <select>
                        {Object.entries(expenses).map(([key, value]) =>
                            value.group_id === group_id ? (
                                <option key={key} value={`${key}`}>
                                    {value.description}
                                </option>
                            ) : null
                        )}
                    </select>
                    <button onclick={handleViewExpense}>view expense</button>
                </div>
            </div>
        );
    } else {
        return (
            <div className="transactionContainer">
                <Transactions transactions={transactionsArray} />
            </div>
        );
    }
};

export default Group;

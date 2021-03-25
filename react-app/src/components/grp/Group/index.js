import React, { useState, useEffect } from 'react';
import { Redirect, useHistory, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './Group.css';
import { getExpenses } from '../../../store/expenses';
import Transactions from '../../Transactions';
import groupsReducer from '../../../store/groups';
import { getTransactions } from '../../../store/transactions';

const Group = ({ group }) => {
    const dispatch = useDispatch();
    const [showTransactions, setShowTransactions] = useState(false);

    const user = useSelector((state) => state.session.user);

    const expenses = useSelector((state) => state.expenses); // object
    const transactions = useSelector((state) => state.transactions); // object
    const transactionsArray = Object.values(transactions); // array of objs
    const expensesArray = Object.values(expenses); // array of objs

    const toggleTransactions = () => {
        showTransactions
            ? setShowTransactions(false)
            : setShowTransactions(true);
    };

    let userId;
    if (user) {
        userId = user.id;
    }

    const handleViewGroup = () => {
        return;
    };
    const handleViewExpense = () => {
        return;
    };

    if (showTransactions) {
        dispatch(getTransactions(userId, group.id));
    }

    if (!showTransactions) {
        return (
            <div className="groupContainer">
                <div className="groupDetails">
                    <img src={group.img_url}></img>
                    <h1>{group.name}</h1>
                    <div className="groupTypeContainer">
                        <p className="groupType">{group.type}</p>
                    </div>
                    <button onClick={handleViewGroup}>view group</button>
                </div>
                <div className="expenseDetails">
                    <h1>Expense:</h1>
                    <select>
                        {Object.entries(expenses).map(([key, value]) =>
                            value.group_id === group.id ? (
                                <option key={key} value={`${key}`}>
                                    {value.description}
                                </option>
                            ) : null
                        )}
                    </select>
                    <div>
                        <button onClick={handleViewExpense}>
                            view expense
                        </button>
                    </div>
                    <div>
                        <button onClick={toggleTransactions}>
                            view transaction
                        </button>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="transactionContainer">
                <Transactions transactions={transactionsArray} group={group} />
                <div>
                    <button onClick={toggleTransactions}>{'< back'}</button>
                </div>
            </div>
        );
    }
};

export default Group;

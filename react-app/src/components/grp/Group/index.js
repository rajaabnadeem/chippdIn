import React, { useState, useEffect } from 'react';
import { Redirect, useHistory, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import './Group.css';
import { getExpenses } from '../../../store/expenses';
import Transactions from '../../Transactions';

const Group = ({ name, img_url, type }) => {
    const dispatch = useDispatch();
    const [sortColumn, setSortColumn] = useState('');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [sortType, setSortType] = useState('asc');
    const [item, setItem] = useState('');
    const [showTransactions, setShowTransactions] = useState(false);

    const user = useSelector((state) => state.session.user);
    const expenses = useSelector((state) => state.expenses);
    const transactionsss = useSelector((state) => state.transactions);
    const transaction = Object.values(transactionsss);

    const toggleTransactions = () => {
        showTransactions
            ? setShowTransactions(false)
            : setShowTransactions(true);
    };

    const getData = () => {
        if (sortColumn && sortType) {
            return data.sort((a, b) => {
                let n = a[sortColumn];
                let s = b[sortColumn];
                if (typeof n === 'string') {
                    n = n.charCodeAt(0);
                }
                if (typeof s === 'string') {
                    s = s.charCodeAt(0);
                }
                if (sortType === 'asc') {
                    return n - s;
                } else {
                    return s - n;
                }
            });
        }
        return data;
    };

    const fakeLoader = (sortColumn, sortType) => {
        setLoading(true);
        setTimeout(() => {
            setSortColumn(sortColumn);
            setSortType(sortType);
            setLoading(false);
        }, 500);
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

    if (showTransactions) {
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
        return <div className="transactionContainer"></div>;
    }
};

export default Group;

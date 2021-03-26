import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Group.css';
import Transactions from '../../Transactions';
import { getTransactions } from '../../../store/transactions';
import ExpenseForm from '../../exp/ExpenseForm';

const Group = ({ group }) => {
    const dispatch = useDispatch();
    const [showTransactions, setShowTransactions] = useState(false);

    const user = useSelector((state) => state.session.user);
    const expenses = useSelector((state) => state.expenses);
    const transactions = useSelector((state) => state.transactions);

    const toggleTransactions = async () => {
        await dispatch(getTransactions(userId, group.id));
        showTransactions
            ? setShowTransactions(false)
            : setShowTransactions(true);
    };

    let userId;
    if (user) {
        userId = user.id;
    }

    useEffect(() => {
        dispatch(getTransactions(userId, group.id));
    }, [dispatch]);

    const handleViewGroup = () => {
        return;
    };
    const handleViewExpense = () => {
        return;
    };

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
                    <div className="create-expense">
                        <ExpenseForm group={group} />
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="transactionContainer">
                <Transactions transactions={transactions} group={group} />
                <div>
                    <button onClick={toggleTransactions}>{'< back'}</button>
                </div>
            </div>
        );
    }
};

export default Group;

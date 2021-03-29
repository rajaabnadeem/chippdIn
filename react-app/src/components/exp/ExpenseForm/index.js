import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './ExpenseForm.css';
import { createExpense } from '../../../store/expenses';

const ExpenseForm = ({ group, toggleCreate }) => {
    const dispatch = useDispatch();
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState('');
    const [date, setDate] = useState('');
    const [notes, setNotes] = useState('');
    const user = useSelector((state) => state.session.user);
    let userId;
    if (user) {
        userId = user.id;
    }
    const handleSumbit = async (e) => {
        e.preventDefault();
        toggleCreate();
        await dispatch(
            createExpense({
                description,
                amount,
                date,
                notes,
                user_id: userId,
                group_id: group.id,
            })
        );
    };

    return (
        <form onSubmit={handleSumbit}>
            <div className="nameContainer">
                <input
                    className="name"
                    placeholder="expense name"
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                />
            </div>
            <div className="amountContainer">
                <input
                    className="amount"
                    placeholder="$0.00"
                    type="number"
                    step="1.00"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                />
            </div>
            <div className="dateContainer">
                <input
                    className="date"
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    required
                />
            </div>
            <div className="notesContainer">
                <textarea
                    className="notes"
                    placeholder="any notes?"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    required
                />
            </div>
            <button className="createExpense" type="submit">
                Create Expense
            </button>
        </form>
    );
};

export default ExpenseForm;

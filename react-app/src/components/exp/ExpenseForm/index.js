import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
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
        // console.log(group)
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
            <div>
                <label>
                    Description
                    <input
                        type="text"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    Amount
                    <input
                        type="number"
                        step="1.00"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    Date
                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    Notes
                    <input
                        type="text"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        required
                    />
                </label>
            </div>
            <button type="submit">Create Expense</button>
        </form>
    );
};

export default ExpenseForm;

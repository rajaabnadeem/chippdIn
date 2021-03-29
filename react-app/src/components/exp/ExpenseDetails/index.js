import React from 'react';
import CommentContainer from '../../cmt/CommentContainer';
import './ExpenseDetails.css';

const ExpenseDetails = ({ expense }) => {
    let formDate = [];
    expense.date.split(' ').map((el) => {
        if (el.length <= 4 && !el.includes('G')) {
            formDate.push(`${el} `);
        }
        formDate.join(' ');
        return formDate;
    });
    return (
        <div className="expenseDetails">
            <div className="expenses">
                <div className="container">
                    <div className="detail description">
                        {expense.description}
                    </div>
                    <div className="detail">expense</div>
                </div>
                <div className="detail">
                    {'$'}
                    {expense.amount}
                </div>
                <div className="detail">{formDate}</div>
                <div className="detail"> {expense.notes}</div>
            </div>
            <CommentContainer expense_id={expense.id} />
        </div>
    );
};

export default ExpenseDetails;

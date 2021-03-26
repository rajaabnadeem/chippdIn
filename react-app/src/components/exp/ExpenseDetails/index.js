import React, { useState } from 'react';
import { Redirect, useHistory, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const ExpenseDetails = ({ expense }) => {
    return (
        <div>
            <div>{expense.description} </div>
            <div>{expense.amount}</div>
            <div>{expense.date}</div>
            <div> {expense.notes}</div>
        </div>
    );
};

export default ExpenseDetails;

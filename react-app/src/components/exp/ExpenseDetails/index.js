import React from "react";
import CommentContainer from "../../cmt/CommentContainer";

const ExpenseDetails = ({ expense }) => {
  return (
    <div className="expenseDetails">
      <div className="eD__expense">
        <div>{expense.description} </div>
        <div>{expense.amount}</div>
        <div>{expense.date}</div>
        <div> {expense.notes}</div>
      </div>
      <CommentContainer expense_id={expense.id}/>
    </div>
  );
};

export default ExpenseDetails;

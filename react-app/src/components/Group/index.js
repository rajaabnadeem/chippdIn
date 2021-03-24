import React from "react"
import "./Group.css"

const Group = () => {
const handleViewGroup = () => {
    return
}
const handleViewExpense = () => {
    return
}
    return (<div className="groupContainer">
    <div className="groupDetails">
        <img src="https://thumbs.dreamstime.com/b/gray-man-avatar-design-concept-ai-supported-81256396.jpg"></img>
        <h1>Group name goes here</h1>
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
    </div>)
}

export default Group
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Group.css";
import Transactions from "../../Transactions";
import { getTransactions } from "../../../store/transactions";
import ExpenseForm from "../../exp/ExpenseForm";
import ExpenseDetails from "../../exp/ExpenseDetails";
import Modal from "react-modal";
import { getExpenses, setExpense } from "../../../store/expenses";

const Group = ({ group }) => {
  const dispatch = useDispatch();
  const [showTransactions, setShowTransactions] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [expense, setExpense] = useState([]);
  const user = useSelector((state) => state.session.user);
  const expenses = useSelector((state) => state.expenses);
  const transactions = useSelector((state) => state.transactions);

  Modal.setAppElement(document.getElementById("root"));

  const style = {
    overlay: {
      textAlign: "center",
      top: "35px",
      backgroundColor: "rgba(0,0, 0, 0.1)",
      zIndex: "1000",
    },
  };

  const toggleTransactions = async () => {
    await dispatch(getTransactions(userId, group.id));
    showTransactions ? setShowTransactions(false) : setShowTransactions(true);
  };

  let userId;
  if (user) {
    userId = user.id;
  }

  useEffect(() => {
    dispatch(getExpenses(userId, group.id));
  }, [dispatch]);

  const handleExpenses = () => {
    modalIsOpen ? setModalIsOpen(false) : setModalIsOpen(true);
  };

  const exp = (e) => {
    Object.entries(expenses).map(([key, value]) => {
      if (key === e.target.value) {
        setExpense(value);
      }
    });
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
        </div>
        <div className="expenseDetails">
          <h1>Expense:</h1>
          <select key={expense} value={expense} onChange={exp}>
            {Object.entries(expenses).map(([key, value]) =>
              value.group_id === group.id ? (
                <option key={key} value={`${key}`}>
                  {value.description}
                </option>
              ) : null
            )}
          </select>
          <div>
            <button onClick={handleExpenses}>view expense</button>
          </div>
          <Modal className="exp-modal" style={style} isOpen={modalIsOpen}>
            <ExpenseDetails expense={expense} />
            <button onClick={handleExpenses}>x</button>
          </Modal>
          <div>
            <button onClick={toggleTransactions}>view transaction</button>
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
          <button onClick={toggleTransactions}>{"< back"}</button>
        </div>
      </div>
    );
  }
};

export default Group;

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Group.css';
import Transactions from '../../Transactions';
import { getTransactions } from '../../../store/transactions';
import ExpenseForm from '../../exp/ExpenseForm';
import ExpenseDetails from '../../exp/ExpenseDetails';
import Modal from 'react-modal';
import { getExpenses } from '../../../store/expenses';
import UserGroupForm from './UserGroupForm';
import logo from '../../../images/logo2.jpg';

const Group = ({ group }) => {
    const dispatch = useDispatch();
    const [showTransactions, setShowTransactions] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [createModalIsOpen, setCreateModalIsOpen] = useState(false);
    const [expense, setExpense] = useState([]);
    const user = useSelector((state) => state.session.user);
    const expenses = useSelector((state) => state.expenses);
    const transactions = useSelector((state) => state.transactions);

    Modal.setAppElement(document.getElementById('root'));

    const style = {
        overlay: {
            textAlign: 'center',
            top: '35px',
            backgroundColor: 'rgba(0,0, 0, 0.1)',
            zIndex: '1000',
        },
    };

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
      dispatch(getExpenses(userId, group.id));
    }, [dispatch, userId, group.id]);

    const handleExpenses = () => {
        modalIsOpen ? setModalIsOpen(false) : setModalIsOpen(true);
    };

    const toggleCreate = () => {
        createModalIsOpen
            ? setCreateModalIsOpen(false)
            : setCreateModalIsOpen(true);
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
                    <div>
                        <img alt='groupimg' className="groupImage" src={logo}></img>
                        {/* ^^^ above is a placeholder for group.img_url */}
                    </div>
                    <div className="nameTypeContainer">
                        <div className="groupName">
                            <h1>{group.name}</h1>
                        </div>
                        <div className="groupTypeContainer">
                            <p className="groupType">{`for your, ${group.type}`}</p>
                        </div>
                    </div>
                    <div className="topRightContainer">
                        <div className="groupForm">
                            <UserGroupForm group={group} />
                        </div>
                        <div>
                            <button onClick={toggleTransactions}>
                                group transactions
                            </button>
                        </div>
                    </div>
                </div>
                <div className="expenseDetails">
                    <div className="expenseLabel">
                        <h1>Expense:</h1>
                    </div>
                    <div className="expenseSelectorContainer">
                        <select key={expense} value={expense} onChange={exp}>
                            {Object.entries(expenses).map(([key, value]) =>
                                value.group_id === group.id ? (
                                    <option key={key} value={`${key}`}>
                                        {value.description}
                                    </option>
                                ) : null
                            )}
                        </select>
                    </div>
                    <div className="viewExpenseButton">
                        <button onClick={handleExpenses}>view expense</button>
                    </div>
                    <Modal
                        className="expModal"
                        style={style}
                        isOpen={modalIsOpen}
                    >
                        <ExpenseDetails expense={expense} />
                        <button onClick={handleExpenses}>x</button>
                    </Modal>

                    <div className="expButtonContainer">
                        <button
                            className="createExpButton"
                            onClick={toggleCreate}
                        >
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
                <Modal
                    className="createExpModal"
                    style={style}
                    isOpen={createModalIsOpen}
                >
                    <ExpenseForm group={group} toggleCreate={toggleCreate} />
                    <button onClick={toggleCreate}>x</button>
                </Modal>
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

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
    const [expense, setExpense] = useState(-6);
    const [value, setValue] = useState(-6);

    const user = useSelector((state) => state.session.user);
    const expenses = useSelector((state) => state.expenses);
    const transactions = useSelector((state) => state.transactions);

    Modal.setAppElement(document.getElementById('root'));

    const style = {
        overlay: {
            textAlign: 'center',
            top: '45px',
            backgroundColor: 'rgba(0,0, 0, 0.8)',
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
    const [usersInGroup, setUsersInGroup] = useState([]);

    const handleExpenses = () => {
        if (value == -6) return;
        modalIsOpen ? setModalIsOpen(false) : setModalIsOpen(true);
    };

    const toggleCreate = () => {
        createModalIsOpen
            ? setCreateModalIsOpen(false)
            : setCreateModalIsOpen(true);
    };

    const exp = (e) => {
        setValue(e.target.value);
        setExpense(expenses[e.target.value]);
    };

    const getUsersInGroup = async () => {
        const res = await fetch(`/api/groups/${group.id}/user-groups/`);
        let x = await res.json();
        let arr = [];
        for (let y in x) {
            arr.push(`${x[y].first_name} ${x[y].last_name}`);
        }
        setUsersInGroup(arr);
    };

    useEffect(() => {
        dispatch(getExpenses(userId, group.id));
        dispatch(getTransactions(userId, group.id));
        getUsersInGroup();
    }, [dispatch, userId, group.id, Transactions]);

    usersInGroup.map((el) => console.log(el));
    if (!showTransactions) {
        return (
            <div className="groupContainer">
                <div className="groupDetails">
                    <div className="imageTitle">
                        <img className="groupImage" src={logo}></img>
                        {/* ^^^ above is a placeholder for group.img_url */}

                        <h1 className="groupName">{group.name}</h1>
                    </div>
                    <div>
                        <div className="groupMemberTitle">Members</div>
                        <div>
                            {usersInGroup &&
                                usersInGroup.map((el, idx) => {
                                    return (
                                        <div className="usersInGroup" key={idx}>
                                            {el}
                                        </div>
                                    );
                                })}
                        </div>
                        <div className="topRightContainer">
                            <div className="groupForm">
                                <UserGroupForm group={group} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="expenseLabel"></div>

                <div className="expenseDetails">
                    <div className="expense">
                        <div className="expenseSelectorContainer">
                            <select
                                className="expSelector"
                                key={expense}
                                value={value}
                                onChange={exp}
                            >
                                <option value={-6}>
                                    Please select an option
                                </option>
                                {Object.entries(expenses).map(([key, value]) =>
                                    value.group_id === group.id ? (
                                        <option key={key} value={`${key}`}>
                                            {value.description}
                                        </option>
                                    ) : null
                                )}
                            </select>
                        </div>
                        <div className="viewExpenseButtonContainer">
                            <button
                                className="viewExpenseButton"
                                onClick={handleExpenses}
                            >
                                view expense
                            </button>
                        </div>
                        <Modal
                            className="expModal"
                            style={style}
                            isOpen={modalIsOpen}
                        >
                            <div>
                                <button
                                    className="xButton"
                                    onClick={handleExpenses}
                                >
                                    x
                                </button>
                                <ExpenseDetails expense={expense} />
                            </div>
                        </Modal>
                    </div>
                    <div>
                        <div>
                            <button
                                className="createExpButton"
                                onClick={toggleCreate}
                            >
                                + new expense
                            </button>
                        </div>
                    </div>
                </div>
                <Modal
                    className="createExpModal"
                    style={style}
                    isOpen={createModalIsOpen}
                >
                    <ExpenseForm group={group} toggleCreate={toggleCreate} />
                    <button className="xButton" onClick={toggleCreate}>
                        x
                    </button>
                </Modal>
                <div className="transactionButtonContainer">
                    <button
                        className="transButton"
                        onClick={toggleTransactions}
                    >
                        view transactions
                    </button>
                </div>
            </div>
        );
    } else {
        return (
            <div className="transactionContainer">
                <div>
                    <Transactions transactions={transactions} group={group} />
                </div>
                <div>
                    <button className="xButton" onClick={toggleTransactions}>
                        x
                    </button>
                </div>
            </div>
        );
    }
};

export default Group;

import 'rsuite-table/dist/css/rsuite-table.css';
import { HeaderCell, Table, Column, Cell } from 'rsuite-table';
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const Transactions = ({ transactions }) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [sortColumn, setSortColumn] = useState('');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [sortType, setSortType] = useState('asc');
    const [item, setItem] = useState('');

    const getData = () => {
        if (sortColumn && sortType) {
            return data.sort((a, b) => {
                let n = a[sortColumn];
                let s = b[sortColumn];
                if (typeof n === 'string') {
                    n = n.charCodeAt(0);
                }
                if (typeof s === 'string') {
                    s = s.charCodeAt(0);
                }
                if (sortType === 'asc') {
                    return n - s;
                } else {
                    return s - n;
                }
            });
        }
        return data;
    };

    useEffect(() => {
        setSortColumn('date');
        setData(transactions);
        setSortType('desc');
    }, []);

    const fakeLoader = (sortColumn, sortType) => {
        setLoading(true);
        setTimeout(() => {
            setSortColumn(sortColumn);
            setSortType(sortType);
            setLoading(false);
        }, 500);
    };

    return (
        <div>
            <Table
                data={getData()}
                height={200}
                sortColumn={sortColumn}
                sortType={sortType}
                onSortColumn={fakeLoader}
                loading={loading}
                onRowClick={(data) => setItem(data)}
            >
                <Column width={100} align="center" resizable sortable>
                    <HeaderCell>Expense</HeaderCell>
                    <Cell dataKey="name" />
                </Column>
                <Column width={100} align="center" resizable sortable>
                    <HeaderCell>Date</HeaderCell>
                    <Cell dataKey="date" />
                </Column>
                <Column width={100} align="center" resizable sortable>
                    <HeaderCell>Sender</HeaderCell>
                    <Cell dataKey="sender" />
                </Column>
                <Column width={100} align="center" resizable sortable>
                    <HeaderCell>Getter</HeaderCell>
                    <Cell dataKey="getter" />
                </Column>
                <Column width={100} align="center" resizable sortable>
                    <HeaderCell>Amount</HeaderCell>
                    <Cell dataKey="amount" />
                </Column>
                <Column width={100} align="center" resizable sortable>
                    <HeaderCell></HeaderCell>
                    <Cell dataKey="paid">
                        {(rowData) => {
                            function handlePaidClick() {
                                if (rowData) {
                                    return '✅';
                                } else {
                                    return '❌';
                                }
                            }
                            return <span>{handlePaidClick}</span>;
                        }}
                    </Cell>
                </Column>
            </Table>
        </div>
    );
};

export default Transactions;

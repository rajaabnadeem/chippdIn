import 'rsuite-table/dist/css/rsuite-table.css';
import { HeaderCell, Table, Column, Cell } from 'rsuite-table';
import React, { useState, useEffect } from 'react';
import './Transactions.css';

const Transactions = ({ transactions }) => {
    const [sortColumn, setSortColumn] = useState('');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [sortType, setSortType] = useState('asc');
    // const [item, setItem] = useState('');

    useEffect(() => {
        setData(Object.values(transactions));
        setSortColumn('date');
        setSortType('desc');
    }, []);

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

    const fakeLoader = (sortColumn, sortType) => {
        setLoading(true);
        setTimeout(() => {
            setSortColumn(sortColumn);
            setSortType(sortType);
            setLoading(false);
        }, 1000);
    };

    return (
        <div>
            <Table
                className="table"
                data={getData()}
                height={220}
                width={645}
                sortColumn={sortColumn}
                sortType={sortType}
                onSortColumn={fakeLoader}
                loading={loading}
                // onRowClick={(data) => setItem(data)}
            >
                <Column width={100} align="center" resizable sortable>
                    <HeaderCell>Expense</HeaderCell>
                    <Cell dataKey="description" />
                </Column>
                <Column width={260} align="center" resizable sortable>
                    <HeaderCell>Date</HeaderCell>
                    <Cell dataKey="date"></Cell>
                </Column>
                <Column width={80} align="center" resizable sortable>
                    <HeaderCell>Sender</HeaderCell>
                    <Cell dataKey="sender" />
                </Column>
                <Column width={80} align="center" resizable sortable>
                    <HeaderCell>Getter</HeaderCell>
                    <Cell dataKey="getter" />
                </Column>
                <Column width={100} align="center" resizable sortable>
                    <HeaderCell>Amount</HeaderCell>
                    <Cell dataKey="transactionAmount" />
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

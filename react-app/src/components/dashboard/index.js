import React, { useState } from 'react';
import { Redirect, useHistory, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Group from '../Group';
import NewGroup from '../NewGroup'
const Dashboard = ({}) => {
    const dispatch = useDispatch();
    const sessionGroups = useSelector((state) => state.groups);

    return (
        <div className="dashboard-container">
            <div className="left-dash"></div>
            <div className="center-dash">
                <div className="groups-container">
                    <NewGroup />
                    {/* {sessionGroups &&
                        sessionGroups.map((group, idx) => (
                            <Group
                                value={group}
                                key={idx}
                                className="group-component"
                                groupName={group.name}
                                groupType={group.type}
                            />
                        ))} */}
                </div>
            </div>
            <div className="right-dash"></div>
        </div>
    );
};

export default Dashboard;

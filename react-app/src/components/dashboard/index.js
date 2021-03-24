import React, { useState } from 'react';
import { Redirect, useHistory, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Group from '../Group';
import NewGroup from '../NewGroup'

const Dashboard = ({}) => {
    const sessionGroups = useSelector((state) => state.session.groups);

    return (
        <div className="dashboard-container">
            <div className="left-dash"><NewGroup/></div>
            <div className="center-dash">
                <div className="groups-container">
                    {sessionGroups &&
                        sessionGroups.map((group, idx) => (
                            <Group value={group}
                                key={idx}
                                className="group-component"
                                name={group.name}
                                type={group.type}
                                img_url={group.img_url}
                            />
                        ))}
                </div>
            </div>
            <div className="right-dash"></div>
        </div>
    );
};

export default Dashboard

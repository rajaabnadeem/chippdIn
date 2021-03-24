import React, { useState } from 'react';
import { Redirect, useHistory, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import  Group  from '../grp/Group';

const Dashboard = ({}) => {
    const dispatch = useDispatch();
    const sessionGroups = useSelector((state) => state.session.groups);

    return (
        <div className="dashboard-container">
            <div className="left-dash"></div>
            <div className="center-dash">
                <div className="groups-container">
                    {sessionGroups &&
                        sessionGroups.foreach((group) => (
                            <Group
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
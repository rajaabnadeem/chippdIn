import React, { useState } from 'react';
import { Redirect, useHistory, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Group } from '../grp';

const Dashboard = ({}) => {
    const dispatch = useDispatch();
    const sessionGroups = useSelector((state) => state.session.groups);

    return (
        <div className="container">
            <div className="left"></div>
            <div className="center">
                <div>
                    {sessionGroups &&
                        sessionGroups.foreach((group) => (
                            <Group
                                name={group.name}
                                type={group.type}
                                img_url={group.img_url}
                            />
                        ))}
                </div>
            </div>
            <div className="right"></div>
        </div>
    );
};

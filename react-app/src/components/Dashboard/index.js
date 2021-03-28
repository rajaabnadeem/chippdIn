import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Group from '../grp/Group';
import NewGroup from '../grp/NewGroup';
import { getUserGroups } from '../../store/groups';

const Dashboard = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.session.user);
    const groups = useSelector((state) => state.groups);

    let userId;
    if (user) {
        userId = user.id;
    }

    useEffect(() => {
        if (userId) {
            dispatch(getUserGroups(user.id));
        }
    }, [dispatch, user, userId]);

    return (
        <div className="dashboard-container">
            <div className="left-dash">
                <h1>NEW GROUP</h1>
                <NewGroup />
            </div>
            <div className="center-dash">
                <h1>GROUP CONTAINERS</h1>
                <div className="groups-container">
                    {groups &&
                        Object.values(groups).map((group) => (
                            <Group
                                value={group.name}
                                key={group.id}
                                className="group-component"
                                group={group}
                            />
                        ))}
                </div>
            </div>
            <div className="right-dash"></div>
        </div>
    );
};

export default Dashboard;

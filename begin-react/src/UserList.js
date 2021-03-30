import React from 'react';


function User({ users }) {
    return (
        <div>
            <b>{users.username}</b> <span>({users.email})</span>
        </div>
    )
}

function UserList() {
    const users = [
        {
            id: 1,
            username: 'velopert',
            email: 'public.velopert@gmail.com'
        },
        {
            id: 2,
            username: 'tester',
            email: 'tester@example.com'
        },
        {
            id: 3,
            username: 'liz',
            email: 'liz@example.com'
        }
    ];

    return (
        <div>
            <User users={users[0]} />
            <User users={users[1]} />
            <User users={users[2]} />
        </div>
    );
}

export default UserList;

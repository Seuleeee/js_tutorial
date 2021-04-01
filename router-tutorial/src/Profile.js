import React from 'react';
import { withRouter } from 'react-router-dom';
import WithRouterSample from './WithRouterSample';

const data = {
    kobe: {
        name: 'kobe_bryant',
        description: 'GOAT ever',
    },
    lebron: {
        name: 'lebron_james',
        description: 'lebtongsu',
    }
};

const Profile = ({ match }) => {
    const { username } = match.params;
    const profile = data[username];
    if (!profile) {
        return <div>there is no user</div>
    }
    return (
        <div>
            <h3>
                {username}({profile.name})
            </h3>
            <p>{profile.description}</p>
            <WithRouterSample/>
        </div>
    );
};

export default withRouter(Profile);

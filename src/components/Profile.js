import React from 'react';

import './profile.css';

function Profile({ profile }) {
    return (
        <li className="profile">
            <h4>{profile.username}</h4>
            <img src={profile.image} />
        </li>
    )
}

export default Profile;
import React from 'react';

import './profile.css';

function Profile({ profile, onDelete }) {
    return (
        <>
            <li className="profile">
                <h4>{profile.username}</h4>
                <p>{profile.work}</p>
                <img src={profile.image} />
            </li>
            <button onClick={onDelete}>Delete</button>
        </>
    )
}

export default Profile;
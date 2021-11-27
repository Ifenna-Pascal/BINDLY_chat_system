import { Avatar } from '@material-ui/core';
import React from 'react';
import { Users } from '../../Util/Icons';
import { CenterUser, TopWrapper, TopText, UserWrapper, TopInput } from './style';
const User = ({ url, name }) => (
    <CenterUser>
        <Avatar style={{ width: '2rem', height: '2rem' }} alt="Profile" src={url} />
        <p>{name}</p>
    </CenterUser>
);

function CenterTop() {
    return (
        <TopWrapper>
            <TopText>Chats</TopText>
            <TopInput placeholder="Search user" />
            <UserWrapper>
                {Users.map((user, id) => (
                    <User key={id} url={user.url} name={user.name} />
                ))}
            </UserWrapper>
        </TopWrapper>
    );
}

export default CenterTop;

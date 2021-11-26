import React from 'react';
import PersonOutlinedIcon from '@material-ui/icons/PersonOutlined';
import GroupAddOutlinedIcon from '@material-ui/icons/GroupAddOutlined';
import ChatOutlinedIcon from '@material-ui/icons/ChatOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import NightsStayOutlined from '@material-ui/icons/NightsStayOutlined';
import { Avatar } from '@material-ui/core';
export const centerIcons = [
    {
        name: <PersonOutlinedIcon style={{ background: 'transparent' }} />,
    },
    {
        name: <GroupAddOutlinedIcon style={{ background: 'transparent' }} />,
    },
    {
        name: <ChatOutlinedIcon style={{ background: 'transparent' }} />,
    },
    {
        name: <SettingsOutlinedIcon style={{ background: 'transparent' }} />,
    },
];

export const bottomIcons = [
    {
        name: <NightsStayOutlined style={{ background: 'transparent' }} />,
    },
    {
        name: (
            <Avatar
                style={{ width: '2.5rem', height: '2.5rem' }}
                alt="Profile"
                src="https://cdn.pixabay.com/photo/2018/01/06/09/25/hijab-3064633_960_720.jpg"
            />
        ),
    },
];

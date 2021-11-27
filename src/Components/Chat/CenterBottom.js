import { Avatar } from '@material-ui/core';
import React from 'react';
import { recents } from '../../Util/Icons';
import { Recents, RecentBody, RecentTime, RecentWrapper, CenterBottomWrapper, BottomText } from './style';

const Recent = ({ url, name, text, time }) => {
    return (
        <Recents>
            <Avatar style={{ width: '2.3rem', height: '2.3rem' }} alt="Profile" src={url} />
            <RecentBody>
                <b>{name}</b>
                <span>{text}</span>
            </RecentBody>
            <RecentTime>{time}</RecentTime>
        </Recents>
    );
};

function CenterBottom() {
    return (
        <CenterBottomWrapper>
            <BottomText>Recent</BottomText>
            <RecentWrapper>
                {recents.map((recent, id) => (
                    <Recent key={id} name={recent.name} text={recent.text} time={recent.time} url={recent.url} />
                ))}
            </RecentWrapper>
        </CenterBottomWrapper>
    );
}

export default CenterBottom;

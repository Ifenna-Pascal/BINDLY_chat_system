import { Avatar } from '@material-ui/core'
import React from 'react';
import {Recents, RecentBody, RecentTime, RecentWrapper, CenterBottomWrapper, TopText,} from "./style";

const Recent = ({url, textb, text, time})=> {
    return (
        <Recents>
             <Avatar style={{ width: '2rem', height: '2rem' }} alt="Profile" src={url} />
             <RecentBody>
                 <b>{textb}</b>
                 <span>{text}</span>
            </RecentBody> 
            <RecentTime>{time}</RecentTime>
        </Recents>
    )
}

function CenterBottom() {
    return (
        <CenterBottomWrapper>
            <TopText>Recent</TopText>
            <RecentWrapper>

            </RecentWrapper>
        </CenterBottomWrapper>
    )
}

export default CenterBottom

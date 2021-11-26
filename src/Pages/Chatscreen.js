import React from 'react';
import LeftNav from '../Components/Chat/LeftNav';
import { ChatSection, ChatWrapper } from './style';

function Chatscreen() {
    return (
        <ChatWrapper>
            <ChatSection>
                <LeftNav />
            </ChatSection>
        </ChatWrapper>
    );
}

export default Chatscreen;

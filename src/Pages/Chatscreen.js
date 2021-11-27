import React from 'react';
import Center from '../Components/Chat/Center';
import LeftNav from '../Components/Chat/LeftNav';
import { ChatSection, ChatWrapper } from './style';

function Chatscreen() {
    return (
        <ChatWrapper>
            <ChatSection>
                <LeftNav />
                <Center />
            </ChatSection>
        </ChatWrapper>
    );
}

export default Chatscreen;

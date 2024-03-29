import React from 'react';
import { Logo } from '../style';
import { Icons, EndIcons } from './Icons';
import { LeftSection, LeftWrapper, Top, Center, Bottom } from './style';

function LeftNav() {
    return (
        <LeftWrapper width="6.3%">
            <LeftSection>
                <Top>
                    <Logo />
                </Top>
                <Center>
                    <Icons />
                </Center>
                <Bottom>
                    <EndIcons />
                </Bottom>
            </LeftSection>
        </LeftWrapper>
    );
}

export default LeftNav;

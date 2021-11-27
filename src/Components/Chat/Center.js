import React from 'react';
import CenterBottom from './CenterBottom';
import CenterTop from './CenterTop';
import { LeftSection, LeftWrapper } from './style';

function Center() {
    return (
        <LeftWrapper width="25%">
            <LeftSection background="#dcdcdc">
                <CenterTop />
                <CenterBottom />
            </LeftSection>
        </LeftWrapper>
    );
}

export default Center;

import React from 'react';
import CenterTop from './CenterTop';
import { LeftSection, LeftWrapper } from './style';

function Center() {
    return (
        <LeftWrapper width="25%">
            <LeftSection background="#dcdcdc">
                <CenterTop />
            </LeftSection>
        </LeftWrapper>
    );
}

export default Center;

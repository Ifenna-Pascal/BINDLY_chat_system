import React, { useState } from 'react';
import Primary from '../Components/Primary';
import DesignContainer from '../Components/DesignContainer';
function Auth() {
    const [isReg, setIsReg] = useState(true);
    return (
        <Primary isReg={isReg} setIsReg={setIsReg}>
            <DesignContainer isReg={isReg} />
        </Primary>
    );
}

export default Auth;

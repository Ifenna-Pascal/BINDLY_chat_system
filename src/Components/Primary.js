import React, { useState } from 'react';
import {
    AuthContainer,
    AuthWrapper,
    AuthIntro,
    AuthLogo,
    Logo,
    Button,
    LogoText,
    AuthHeading,
    AuthForm,
    AuthFooter,
} from './style';

function Primary({ children, setIsReg, isReg, text }) {
    return (
        <AuthContainer>
            <AuthWrapper>
                <AuthIntro>
                    <AuthLogo>
                        <Logo />
                    </AuthLogo>
                    <LogoText>Chatvia</LogoText>
                </AuthIntro>
                <AuthHeading>
                    <LogoText>{text ? text : isReg ? 'Sign up' : 'Sign in'}</LogoText>
                    <p>
                        {text
                            ? 'Enter password to unlock the screen'
                            : isReg
                            ? 'Open an account with Chatvia now'
                            : 'Sign in into your account now'}
                    </p>
                </AuthHeading>
                {children}
                {!text ? (
                    <AuthFooter>
                        <p>
                            {isReg ? 'Already have an account? ' : 'Do not have an account? '}{' '}
                            <span onClick={() => setIsReg(!isReg)}>{isReg ? 'Sign in' : 'Register'}</span>
                        </p>
                    </AuthFooter>
                ) : (
                    <> </>
                )}
            </AuthWrapper>
        </AuthContainer>
    );
}

export default Primary;

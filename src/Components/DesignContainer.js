import React from 'react';
import { AiOutlineRedEnvelope, AiOutlineUser, AiOutlineLock } from 'react-icons/ai';
import { AuthForm, Button } from './style';

function DesignContainer({ isReg }) {
    return (
        <AuthForm>
            <form>
                {isReg && (
                    <div>
                        <label>Email</label>
                        <div>
                            <span>
                                <AiOutlineRedEnvelope style={{ background: 'transparent' }} />
                            </span>
                            <input placeholder="Enter Email" />
                        </div>
                    </div>
                )}
                <div>
                    <label>Username</label>
                    <div>
                        <span>
                            <AiOutlineUser style={{ background: 'transparent' }} />
                        </span>
                        <input placeholder="Enter Username" />
                    </div>
                </div>
                <div>
                    <label>Password</label>
                    <div>
                        <span>
                            <AiOutlineLock style={{ background: 'transparent' }} />
                        </span>
                        <input placeholder="Enter Passwprd" />
                    </div>
                </div>
                <div>
                    <Button>{isReg ? 'Sign up' : 'Sign in'}</Button>
                </div>
                <p>By registering you aggree to the terms of Chavia team</p>
            </form>
        </AuthForm>
    );
}

export default DesignContainer;

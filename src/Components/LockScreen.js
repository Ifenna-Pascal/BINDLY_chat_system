import React from 'react';
import { AiOutlineLock } from 'react-icons/ai';
import { AuthForm, Avart, Button } from './style';
import { Avatar } from '@mui/material';

function LockScreen() {
    return (
        <AuthForm>
            <form>
                <Avart>
                    <Avatar alt="Prifile" src="https://pixabay.com/photos/woman-portrait-model-fashion-hat-597173/" />
                    <p> Amaka Lawrence </p>
                </Avart>
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
                    <Button>Unlock</Button>
                </div>
            </form>
        </AuthForm>
    );
}

export default LockScreen;

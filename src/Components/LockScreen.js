import React from 'react';
import { AiOutlineLock } from 'react-icons/ai';
import { AuthForm, Avart, Button } from './style';
import Avatar from '@material-ui/core/Avatar';

function LockScreen() {
    return (
        <AuthForm>
            <form>
                <Avart>
                    <Avatar
                        style={{ alignSelf: 'center', justifySelf: 'center', width: '4rem', height: '4rem' }}
                        alt="Profile"
                        src="https://cdn.pixabay.com/photo/2018/01/06/09/25/hijab-3064633_960_720.jpg"
                    />
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

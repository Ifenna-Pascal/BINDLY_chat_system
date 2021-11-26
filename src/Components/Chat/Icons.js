import React from 'react';
import { bottomIcons, centerIcons } from '../../Util/Icons';
import { Icon } from './style';

export const EndIcons = () => (
    <>
        {bottomIcons.map((icon, i) => (
            <Icon key={i}>{icon.name}</Icon>
        ))}
    </>
);

export function Icons() {
    return (
        <>
            {centerIcons.map((icon, i) => (
                <Icon key={i}>{icon.name}</Icon>
            ))}
        </>
    );
}

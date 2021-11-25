import styled from 'styled-components';
import px2vw from '../Util';

export const ChatWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: rgba(255, 255, 255, 0.8);
`;

export const ChatSection = styled.div`
    max-width: ${px2vw(412, 414)};
    width: 100%;
    display: flex;
    @media (min-width: 768px) {
        max-width: ${px2vw(1400, 1440)};
    }
`;

import styled from 'styled-components';
import { LogoText } from '../style';

export const Icon = styled.div`
    margin-bottom: 1.8rem;
    padding: 0.5rem;
    background: transparent;

    &:hover {
        cursor: pointer;
        background: #dcdcdc;
        border-radius: 10px;
    }
`;

export const LeftWrapper = styled.div`
    width: ${({ width }) => width};
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    height: 96vh;
`;
export const LeftSection = styled.div`
    width: 100%;
    height: 100%;
    border-radius: 12px;
    background: ${({ background }) => (background ? background : 'transparent')};
    margin-top: 1.6rem;
    display: flex;
    flex-direction: column;
    padding: 1.2rem;
`;
export const Top = styled.div`
    align-self: center;
    justify-self: flex-start;
    margin-bottom: 6rem;
    padding: 0.1rem;
`;
export const Center = styled.div`
    align-self: center;
    justify-self: center;
    margin-bottom: 6rem;
    padding: 0.1rem;
`;
export const Bottom = styled.div`
    align-self: center;
    justify-self: flex-end;
    margin-bottom: 1rem;
    padding: 0.1rem;
`;

export const TopWrapper = styled.div`
    height: 25%;
    display: flex;
    background: transparent;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    margin-bottom: 1.3rem;
`;
export const TopText = styled(LogoText)`
    margin-bottom: 1rem;
    background: transparent;
`;

export const TopInput = styled.input`
    background: #d3d0d0;
    border-radius: 7px;
    padding: 0.6rem 0.6rem 0.6rem 0.6rem;
    outline: none;
    border: none;
    width: 100%;
    margin-bottom: 1rem;
`;
export const UserWrapper = styled.div`
    display: flex;
    width: 100%;
    background: transparent;
    overflow-x: scroll;
    margin-bottom: 0.7rem;
    &::-webkit-scrollbar {
        /* WebKit */
        width: 0;
        height: 0;
    }
    &:hover {
        cursor: pointer;
    }
`;
export const CenterUser = styled.div`
    margin-right: 0.4rem;
    padding: 0.1rem;
    display: flex;
    background: transparent;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    p {
        background: transparent;
        font-size: 0.9rem;
        font-family: 'Montserrat' sans-serif;
        font-weight: 600;
        color: grey;
        padding: 0.2rem;
    }
`;

export const CenterBottomWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 75%;
    background: transparent;
    overflow-y: scroll;
    margin-bottom: 0.7rem;
    &::-webkit-scrollbar {
        /* WebKit */
        width: 0;
        height: 0;
    }
    h4 {
        align-items: flex-start;
        justify-self: flex-start;
    }
`;
export const RecentBody = styled.div`
    display: flex;
    flex-direction: column;
    justify-self: center;
    /* align-items: center; */
    background: transparent;
    text-align: left;
    margin-top: -0.32rem;
    flex-basis: 66%;
    b {
        text-align: left;
        background: transparent;
    }
    span {
        text-align: left;
        background: transparent;
    }
`;
export const Recents = styled.div`
    display: flex;
    height: 3rem;
    justify-content: space-between;
    background: transparent;
    margin-bottom: 1.5rem;
    width: 100%;
`;
export const RecentTime = styled.div`
    background: transparent;
    font-size: 0.8rem;
`;
export const RecentWrapper = styled.div`
    background: transparent;
    /* padding: 2rem 0; */
    display: flex;
    flex-direction: column;
`;

export const BottomText = styled(TopText)`
    text-align: left;
    font-size: 1.1rem;
    margin-bottom: 1.7rem;
`;

import styled from 'styled-components';
import px2vw from '../Util';
import { BsFillChatDotsFill } from 'react-icons/bs';
import '../App.css';

export const AuthContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const AuthWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    justify-content: center;
    align-items: center;
    margin: 12% auto;
    max-width: ${px2vw(400, 414)};

    @media (min-width: 768px) {
        max-width: ${px2vw(700, 1440)};
        margin: 6% auto;
    }
`;
export const AuthLogo = styled.div`
    margin-right: 0.6rem;
`;
export const AuthHeading = styled.div`
    justify-self: center;
    align-self: center;
    text-align: center;
    margin-bottom: 1rem;
    p {
        font-family: 'Montserrat' sans-serif;
    }
`;
export const AuthIntro = styled.div`
    display: flex;
    justify-self: center;
    align-self: center;
    margin-bottom: ${px2vw(35, 414)};

    @media (min-width: 768px) {
        margin-bottom: ${px2vw(35, 1440)};
    }
`;
export const AuthForm = styled.div`
    max-width: ${px2vw(350, 414)};
    margin: 0 auto;
    display: flex;
    margin-bottom: 2rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    form {
        width: 100%;
        justify-self: center;
        align-self: center;
        padding: 1.5rem;
        background: white;
        border-radius: 10px;
        /* box-shadow: 0 2px 2px -2px rgba(0, 0, 0, 0.2); */
        div {
            background: white;
            height: ${px2vw(90, 414)};
            label {
                background: white;
                font-family: 'Montserrat' sans-serif;
                line-height: ${px2vw(40, 414)};
            }
            div {
                span {
                    font-size: 1rem;
                    background: rgba(241, 240, 245, 0.589);
                    padding: 0.42rem;
                    display: flex;
                    color: gray;
                    justify-content: center;
                    align-items: center;
                    display: inline-block;
                    border-right: 1px solid gray;
                    &:hover {
                        cursor: pointer;
                    }
                }
                input {
                    background: rgba(241, 240, 245, 0.589);
                    border-radius: 0 5px 5px 0;
                    padding: 0.6rem 0.6rem 0.6rem 0.6rem;
                    outline: none;
                    border: none;
                    width: 80%;
                }
            }
        }
        p {
            background: white;
            text-align: center;
        }
    }
    @media (min-width: 768px) {
        max-width: ${px2vw(600, 1440)};
        form {
            div {
                height: ${px2vw(80, 1440)};
                label {
                    line-height: ${px2vw(38, 1440)};
                }
            }
        }
    }
`;
export const AuthFooter = styled.div`
    p {
        span {
            font-weight: bold;
            &:hover {
                cursor: pointer;
            }
        }
    }
`;
export const Logo = styled(BsFillChatDotsFill)`
    color: #5d3fd3;
    opacity: 0.8;
    font-size: ${px2vw(20, 414)};
    @media (min-width: 768px) {
        font-size: ${px2vw(30, 1440)};
    }
`;
export const LogoText = styled.h4`
    text-align: center;
    color: rgba(0, 0, 0, 0.8);
    font-size: ${px2vw(19, 414)};
    font-family: 'Montserrat' sans-serif;

    @media (min-width: 768px) {
        font-size: ${px2vw(20, 1440)};
    }
`;
export const Button = styled.button`
    margin-top: 2rem;
    padding: 0.4rem 2rem;
    text-align: center;
    width: 90%;
    opacity: 0.9;
    font-size: 1rem;
    color: white;
    background: #5d3fd3;
    border: none;
    border-radius: 5px;
`;

export const Avart = styled.div`
    align-self: center;
    justify-self: center;
    text-align: center;
`;

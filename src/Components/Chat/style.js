import styled from 'styled-components';

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
    max-width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    height: 100vh;
`;
export const LeftSection = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 1.6rem;
    display: flex;
    flex-direction: column;
    padding: 1.2rem;
`;
export const Top = styled.div`
    align-self: flex-start;
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
    align-self: flex-end;
    justify-self: flex-end;
    margin-bottom: 1rem;
    padding: 0.1rem;
`;

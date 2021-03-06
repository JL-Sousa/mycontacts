import styled from 'styled-components';

export const Container = styled.header`
    margin-top: 74px;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const InputSearchContainer = styled.div`
    margin-top: 48px;
    width: 100%;

    input {
        width: 100%;
        height: 50px;
        background: #fff;
        border: none;
        border-radius: 25px;
        box-shadow: 0px 4px 10px rgba(0 , 0, 0, 0.4);
        outline: 0;
        padding: 0 16px;

        &::placeholder {
            color: #bcbcbc;
        }
    }
`;

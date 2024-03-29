import styled from 'styled-components';

export default styled.select`
 width: 100%;
 border: 2px solid #fff;
 background: #fff;
 box-shadow: 0px 4px 10px rgba(0,0,0,0.4);
 height: 52px;
 border-radius: 4px;
 padding: 0 16px;
 outline: none;
 font-size: 16px;
 transition: border-color 0.2s ease-in;

 &:focus {
    border-color: ${({ theme }) => theme.colors.primary.main};
 }
`;

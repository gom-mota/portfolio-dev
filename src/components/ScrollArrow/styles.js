import styled from 'styled-components';
export const Container = styled.div`
    .scrollTop {
        position: fixed;
        width: 80px;
        right: 20px;
        bottom: 20px;
        z-index: 1000;
        cursor: pointer;
        opacity: 60%;
    }

    .scrollTop:hover{
        opacity: 1;
    }
`;

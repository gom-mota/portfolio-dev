import styled from 'styled-components';
export const Container = styled.div`
    .scrollTop {
        position: fixed;
        width: 80px;
        right: 20px;
        bottom: 20px;
        z-index: 1000;
        cursor: pointer;
        animation: fadeIn 0.3s;
        transition: opacity 0.4s;
    }

    .scrollTop:hover{
        opacity: 1;
    }
`;

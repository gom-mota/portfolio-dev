import styled from 'styled-components';

export const Main = styled.div`
    
.modal {
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
    background-color: #000000cf;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.colors.textItem};
    
    
    .container {
        background-color: #2f2f2f;
        width: 85%;
        max-width: 500px;
        height: 275px;
        border-radius: 20px;
        box-shadow: ${props => props.theme.effects.shadow}; 

        .content {
            div{
                display: flex;
                flex-direction: column;
                align-items: center;
                width: 100%;
                margin-top: 15px;

                h1{
                    font-size: clamp(0.4em,0.8em + 1vw,1.6em)
                }

                .item{
                    margin: 10px;
                }
                .item:nth-child(1){
                    margin: 20px;
                }
            }
        }
        .close {
            background-color: transparent;
            border: none;
            outline: none;
            width: 32px;
            height: 32px;
            right: calc(-100% + 35px);
            top: 16px;
            cursor: pointer;
            display: flex;
            position: relative;
            align-items: center;
            
            &:before,
            &:after {
                content: ' ';
                position: absolute;
                width: 2.5px;
                height: 24px;
                background-color: ${props => props.theme.colors.textItem};
            }
            &:before {
                transform: rotate(45deg);
            }
            &:after {
                transform: rotate(-45deg);
            }
        
        }
    }
}

    
`;
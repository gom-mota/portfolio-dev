import styled from "styled-components";

export const Container = styled.div`
    position: absolute;
    top: 4rem;
    right: 1rem;

    @media screen and (max-width: 520px) {
        margin-left: 240px;
    }
`;

export const Button = styled.button`
    position: relative;
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
    background: ${(props) => props.theme.colors.accent.gradient};
    width: 55px;
    height: 55px;
    border: none;
    border-radius: 100%;
    box-shadow: ${(props) => props.theme.effects.shadow};
    padding: 12px;
    overflow: hidden;
    cursor: pointer;

    p {
        background-color: ${(props) => props.theme.colors.backgroundItem};
        color: ${(props) => props.theme.colors.textPrimary};
        padding: 6px 7px 4px 7px;
        border-radius: 20px;
        font-size: ${(props) => props.theme.sizes.textPrimary};
        height: auto;
        transition: all 0.3s linear;

        &:first-child {
            color: #f2a900;
            transform: ${({ darkTheme }) =>
                darkTheme ? "translateX(-55px)" : "translateX(0)"};
        }

        &:nth-child(2) {
            color: #a37fff;
            transform: ${({ darkTheme }) =>
                darkTheme ? "translateX(-29px)" : "translateX(29px)"};
        }
    }
`;

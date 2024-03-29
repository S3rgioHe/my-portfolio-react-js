import styled, { keyframes } from "styled-components";

const IconsScaleUp = keyframes`
    0% {
        transform: scale(0) rotate(0deg);
    }

    100% {
        transform: scale(1) rotate(360deg);
    }
`;

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    background: linear-gradient(90deg, rgba(0,83,89,1) 0%, rgba(27,0,69,1) 100%);
`;

export const Row = styled.div`
    .icon {
        color: black;
        opacity: 0.3;
        animation: ${IconsScaleUp} 2s;
        margin: 5px;
    }

`;
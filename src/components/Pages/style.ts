import styled, {keyframes} from "styled-components";

const fadeIn = keyframes`
    0% {
        opacity: 0;
    }

    80% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
`;

export const Container = styled.div`
    animation: ${fadeIn} 4s;
`;
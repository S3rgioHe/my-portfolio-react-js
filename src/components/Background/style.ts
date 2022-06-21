import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    background-color: var(--background);

`;

export const Row = styled.div`
    .icon {
        color: grey;
        opacity: 0.1;
        transition: 4s;

        &:hover {
            background: #820ad1;

            transition: 0s;
            color: #fff;
            box-shadow: 0px 0px 40px px rgba(130,10,209, 0.3);
            opacity: 1;

            border-radius: 50%;
        }
    }
`;
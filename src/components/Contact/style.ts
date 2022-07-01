import styled from "styled-components";

interface ContainerProps {
    active: boolean;
}

export const Container = styled.div<ContainerProps>`
    position: absolute;
    z-index: 1;

    top: 40%;
    left: 50%;
    
    width: 70%;
    padding: 2rem;

    color: #fff;

    border: solid 1px;
    border-radius: 0.5rem;

    transform: translate(-50%, -50%);
    display: flex;

    transition: 0.5s;

    ${props => props.active ? '' : 'dsplay: none;'}
    ${props => props.active ? '' : 'opacity: 0;'}
`;

export const Title = styled.h1`
    font-size: 2rem;
    color: #fff;

`;

export const Item = styled.div`
    

    h1 {
        font-size: 2rem;
        color: #fff;
        text-align: center;
        display: inline;
    }
    .icon {

        width: 1rem;
        height: 1rem;
        margin: 1rem;
        display: inline;
    }
`;


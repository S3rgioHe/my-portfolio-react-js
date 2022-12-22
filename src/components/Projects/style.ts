import styled from 'styled-components';

interface ContainerProps {
    active: boolean;
}
export const Container = styled.div<ContainerProps>`
    position: absolute;
    ${props => props.active ? `z-index: 2;`: `z-index: 1;`}

    top: 48%;
    left: 50%;

    width: 70%;

    transform: translate(-50%, -50%);
    display: flex;

    transition: 0.5s;

    ${props => props.active ? '' : 'opacity: 0;'}
`;

export const Item = styled.div`
    width: 100%;
    height: 100%;

    h1 {
        font-size: 2rem;
        color: #fff;
        text-align: center;
        margin-bottom: 2rem;
    }

    img {  
        border-radius: 0.5rem;
        width: 60%;
    }

    p {
        color: #fff;
        font-size: 23px;
        font-weight: 400;
        margin-bottom: 1rem;
    }

    div {
        margin: 0.5rem;
    }
`;

export const Elements = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Button1 = styled.button`
    color: #fff;
    background: transparent;
    transform: scale(4) translateX(-10px);
    border: none;
    position: absolute;
    transition: 0.2s;

    &:hover {
        transform: scale(4.5) translateX(-10px);
    }

    &:active {
        transform: scale(4) translateX(-10px);
    }
`;

export const Button2 = styled.button`
    color: #fff;
    background: transparent;
    transform: scale(4) translateX(10px);
    border: none;
    position: absolute;
    transition: 0.2s;

    &:hover {
        transform: scale(4.5) translateX(10px);
    }

    &:active {
        transform: scale(4) translateX(10px);
    }
`;
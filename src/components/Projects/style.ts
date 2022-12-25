import styled from 'styled-components';

interface ContainerProps {
    active: boolean;
}
export const Container = styled.div<ContainerProps>`
    position: absolute;
    ${props => props.active ? `z-index: 2;`: `z-index: 1;`}

    top: 45%;
    width: 80%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 2rem 0;

    transition: 0.5s;

    ${props => props.active ? '' : 'opacity: 0;'}

    background: rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);

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

export const Item = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const Texts = styled.div`
    width: 50%;
    margin: 0 2rem;

    h1 {
        font-size: 2rem;
        color: #fff;
        text-align: center;
        margin: 2rem 0;

    }

    p {
        color: #fff;
        font-size: 23px;
        font-weight: 400;
        margin-bottom: 1rem;
        text-align: justify;
    }
`;

export const Imgs = styled.div`

    display: flex;
    flex-direction: column;
    width: 40%;

    img {
        width: 70%;
        border-radius: 1rem;

        &:first-of-type {
            transform: translateY(2rem) translateX(5%); 
        }

        &:last-of-type {
            transform: translateY(-3rem) translateX(-15%); 
        }
    }

`;
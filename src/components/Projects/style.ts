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

    @media (max-width: 600px) {
        flex-direction: column;
        top: 41%;
        width: 85%;
        padding: 1rem 0;
    }

`;

export const Button1 = styled.button`
    color: #fff;
    background: transparent;
    transform: scale(4) translateX(-10px);
    border: none;
    position: absolute;
    transition: 0.2s;

    @media (max-width: 600px) {
        display: none;
    }

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

    @media (max-width: 600px) {
        display: none;
    }

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

    @media (max-width: 600px) {
        flex-direction: column;
        height: 28rem;
    }
`;

export const Texts = styled.div`
    width: 50%;
    margin: 0 2rem;
    
    @media (max-width: 600px) {
        width: 90%;
        margin: 0 auto 0.7rem auto;
    }

    h1 {
        font-size: 2rem;
        color: #fff;
        text-align: center;
        margin: 2rem 0;

        @media (max-width: 600px) {
            margin: 0.1rem;
            font-size: 2rem;
        }

    }

    p {
        color: #fff;
        font-size: 23px;
        font-weight: 400;
        margin-bottom: 1rem;
        text-align: justify;

        @media (max-width: 600px) {
            margin: 0%;
            font-size: 1rem;
        }
    }

    span {
        @media (max-width: 600px) {
            font-size: 0.7rem;
            text-align: justify;
            margin-bottom: 0.5rem;
        }
    }
`;

export const Imgs = styled.div`

    display: flex;
    flex-direction: column;
    width: 40%;

    @media (max-width: 600px) {
        width: 100%;
    }

    img {
        width: 60%;

        align-self: center;
        border-radius: 1rem;

        -webkit-box-shadow: 3px 3px 10px 1px rgba(56,56,56,1);
        -moz-box-shadow: 3px 3px 10px 1px rgba(56,56,56,1);
        box-shadow: 3px 3px 10px 1px rgba(56,56,56,1);

        &:first-of-type {
            transform: translateY(3rem) translateX(15%) scale(1.2);
        }

        &:last-of-type {
            transform: translateY(-2rem) translateX(-40%) scale(1.2);
        }

        @media (max-width: 600px) {
            width: 50%;

            &:first-of-type {
                transform: translateY(0.3rem) translateX(25%) scale(1.2);
            }

            &:last-of-type {
                transform: translateY(-2.7rem) translateX(-25%) scale(1.2);
            }
        }
    }

`;
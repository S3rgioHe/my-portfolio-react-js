import styled from 'styled-components';

interface ContainerProps {
    active: boolean;
}

export const Container = styled.div<ContainerProps>`
    margin: 20px;
    position: absolute;
    ${props => props.active ? `z-index: 2;`: `z-index: 1;`}

    top: 45%;
    left: 50%;

    transform: translate(-50%, -50%);
    display: flex;

    @media (max-width: 600px) {
        flex-direction: column;
        top: 39%;
        width: 90%;
    }

    transition: 0.5s;

    ${props => props.active ? '' : 'opacity: 0;'}
`;

export const Summary = styled.div`
    width: 35%;
    background: linear-gradient(to right, #01a9ac, #01dbdf);

    border-top-left-radius: 0.25rem;
    border-bottom-left-radius: 0.25rem;

    padding: 2.5rem 2rem;

    text-align: center;
    color: #fff;

    @media (max-width: 600px) {
        flex-direction: column;
        width: 90%;
        padding: 0;
        padding-top: 0.5rem;
        border-radius: 0;
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;

    }

    @media (max-width: 768px) {
        margin: 0;
        left: 15px;
        right: 0;
    }

    @media (max-height: 768px) {

        margin: 0;
        top: 5px;
        left: 15px;
    }

    img {
        width: 90%;

        @media (max-width: 600px) {
        width: 30%;
        }
    }

    .icon {
        margin-right: 0.5rem;
    }

    a {
        display: flex;

        align-items: center;
        justify-content: center;

        margin-top: 1rem;
        margin-bottom: 1rem;

        @media (max-width: 600px) {
            margin: 0.4rem 0;
            font-size: 1.2rem;
        }


        color: #fff;

        font-size: 1.5rem;
        text-decoration: none;
        transition: 0.2s;

        &:hover {
            color: #01a9ac;
            text-decoration: underline;
        }
    }
`;

export const Title = styled.h4`
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 10px;
    margin-top: 10px;
    color: #fff;
`;

export const Content = styled.div`
    width: 65%;

    background: #edeee9;

    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;

    padding: 2.5rem 2rem;

    @media (max-width: 600px) {
        flex-direction: column;
        width: 90%;
        padding: 0.5rem 1.5rem;
        border-radius: 0;
        border-bottom-left-radius: 1rem;
        border-bottom-right-radius: 1rem;

    }
`;

export const ContentText = styled.p`
    font-size: 1.5rem;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;

    @media (max-width: 600px) {
        font-size: 1rem;
        text-align: justify;
    }
`;


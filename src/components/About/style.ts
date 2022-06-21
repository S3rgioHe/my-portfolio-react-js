import styled from 'styled-components';

interface ContainerProps {
    active: boolean;
}

export const Container = styled.div<ContainerProps>`
    margin: 20px;
    position: absolute;
    z-index: 1;

    top: 50%;
    left: 50%;

    transform: translate(-50%, -50%);
    display: flex;

    width: 40rem;

    box-shadow: 0 1px 20px rgba(69, 90, 100, 0.08);
    transition: 0.5s;

    ${props => props.active ? '' : 'dsplay: none;'}
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
    background: #fff;
    border-top-right-radius: 0.25rem;
    border-bottom-right-radius: 0.25rem;
    padding: 2.5rem 2rem;
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
`;


import styled from 'styled-components';

interface ContainerProps {
    active: boolean;
}

export const Container = styled.div<ContainerProps>`
    margin: 20px;
    position: absolute;
    z-index: 1;

    width: 45%;

    display: grid;
    grid-template-columns: 2fr 2fr;

    top: 20%;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    color: white;
    background: grey;
    height: 500px;
    width: 500px;


    transition: 0.5s;

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

    ${props => props.active ? '' : 'dsplay: none;'}
    ${props => props.active ? '' : 'opacity: 0;'}
`;

export const Summary = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;

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
`;

export const Content = styled.div`

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    margin-bottom: 20px;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;

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
`;

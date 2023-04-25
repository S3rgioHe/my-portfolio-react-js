import styled from "styled-components";

interface ContainerProps {
    active: boolean;
}

export const Container = styled.div<ContainerProps>`
    position: absolute;
    ${props => props.active ? `z-index: 2;`: `z-index: 1;`}

    top: 45%;
    left: 50%;
    
    width: 50%;
    padding: 2rem;

    color: #fff;

    border: solid 1px;
    border-radius: 0.5rem;

    transform: translate(-50%, -50%);

    transition: 0.5s;

    ${props => props.active ? '' : 'display: none;'}
    ${props => props.active ? '' : 'opacity: 0;'}

    background: rgba(255, 255, 255, 0.2);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.3);

    img {
        width: 30%;
        padding: 0.5rem;
        background: white;
        border-radius: 0.5rem;

        @media (max-width: 600px) {
            display: none;
        }
    }

    @media (max-width: 600px) {
        flex-direction: column;
        top: 43%;
        width: 90%;
    }
`;

export const Title = styled.h1`
    font-size: 2rem;
    color: #fff;

    @media (max-width: 600px) {
        margin-bottom: 0.7rem;
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 600px) {
        transform: translateX(-5%);
    }
`;

export const List = styled.ul`
    list-style: none;  
    display: inline-flex;
    flex-direction: column;
`;

export const Item = styled.li`

    margin: 1rem 0;
    display: flex;

    @media (max-width: 600px) {
        margin: 0.5rem 0;
    }
    
    h2 {
        font-size: 1.5rem;
        color: #fff;
        text-align: center;
        display: inline;

        @media (max-width: 600px) {
            display: none;
        }
    }

    a {
        font-size: 1.5rem;
        margin: 0 0.5rem;
        color: #fff;
        text-align: center;
        display: inline;

        @media (max-width: 600px) {
            font-size: 1rem;
        }
    }

    .icon {
        
        width: 3rem;
        height: 1.7rem;

        @media (max-width: 600px) {
            width: 2rem;
            height: 1.7rem;
            transform: translateY(-5px);
        }
    }
`;

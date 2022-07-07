import styled from "styled-components";

interface ContainerProps {
    active: boolean;
}

export const Container = styled.div<ContainerProps>`
    position: absolute;
    z-index: 1;

    top: 40%;
    left: 50%;
    
    width: 50%;
    padding: 2rem;

    color: #fff;

    border: solid 1px;
    border-radius: 0.5rem;

    transform: translate(-50%, -50%);

    transition: 0.5s;

    ${props => props.active ? '' : 'dsplay: none;'}
    ${props => props.active ? '' : 'opacity: 0;'}

    img {
        width: 35%;
        padding: 0.5rem;
        background: white;
        border-radius: 0.5rem;
    }
`;

export const Title = styled.h1`
    font-size: 2rem;
    color: #fff;

`;

export const Content = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const List = styled.ul`
    list-style: none;  
    display: inline-flex;
    flex-direction: column;
`;

export const Item = styled.li`

    margin: 1rem 0;
    display: flex;
    
    h2 {
        font-size: 1.5rem;
        color: #fff;
        text-align: center;
        display: inline;
    }

    p {
        font-size: 1.5rem;
        margin: 0 0.5rem;
        color: #fff;
        text-align: center;
        display: inline;
    }

    .icon {
        
        width: 3rem;
        height: 1.7rem;
    }
`;

import styled from 'styled-components';

interface ContainerProps {
    active: boolean;
}
export const Container = styled.div<ContainerProps>`
    position: absolute;
    z-index: 1;

    top: 50%;
    left: 50%;

    width: 70%;

    transform: translate(-50%, -50%);
    display: flex;

    transition: 0.5s;

    ${props => props.active ? '' : 'dsplay: none;'}
    ${props => props.active ? '' : 'opacity: 0;'}

`;

export const Item = styled.div`
    width: 100%;
    height: 100%;

    h1 {
        font-size: 2rem;
        color: #fff;
        text-align: center;
        margin-top: 2rem;
    }
    img {  

        border-radius: 0.5rem;
        width: 50%;
    }
`;
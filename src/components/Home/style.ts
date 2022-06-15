import styled from "styled-components";

interface ContainerProps {
  active: boolean;
}

export const Container = styled.div<ContainerProps>`
  margin: 20px;
    width: 310px;
    height: 70px;
    position: absolute;

    top: 40%;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    color: white;

    transition: 0.5s;

    ${props => props.active ? '' : 'dsplay: none;'}
    ${props => props.active ? '' : 'opacity: 0;'}
`;

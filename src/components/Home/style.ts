import { title } from "process";
import styled from "styled-components";

interface ContainerProps {
  active: boolean;
}

export const Container = styled.div<ContainerProps>`
    margin: 20px;
    position: absolute;

    width: 45%;

    display: grid;
    grid-template-columns: 2fr 2fr;

    top: 20%;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    color: white;

    transition: 0.5s;

    ${props => props.active ? '' : 'dsplay: none;'}
    ${props => props.active ? '' : 'opacity: 0;'}
`;

export const Column = styled.div`
  .typed {
    font-size: 25px;
  }
`;

export const Title = styled.h1`
  margin-top: 40px;
  font-size: 55px;
  font-weight: bold;
`;

export const SubTitle = styled.h2`
  font-size: 30px;
  font-weight: bold;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const Img = styled.img`
  height: 45%;
  margin-top: 10px;
  margin-bottom: 10px;
`;

import { title } from "process";
import styled from "styled-components";

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

    transition: 0.5s;

    @media (max-width: 768px) {
      margin: 0;
      left: 15px;
      right: 0;
    }

    @media (max-height: 768px) {
      top: 40px;
    }

    ${props => props.active ? '' : 'dsplay: none;'}
    ${props => props.active ? '' : 'opacity: 0;'}
`;

export const Column = styled.div`
  .typed {
    font-size: 25px;
  }

  height: 50%;
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

  @media (max-width: 1190px) {
    display: none;
  }

  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
`;

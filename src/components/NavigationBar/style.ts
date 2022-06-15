import styled from 'styled-components';
import { transform } from 'typescript';

export const Container = styled.div`
    margin: 20px;
    width: 310px;
    height: 70px;

    top: 200px;

    background-color: #fff;
    box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.1);

    position: relative;
    display: flex;

    border-radius: 10px;
    margin-left: auto;
    margin-right: auto;

    transition: 0.5s;
`;

export const ButtonList = styled.ul`
    display: flex;
    padding: 0 20px 0 20px;
    width: auto;
`;

interface ButtonProps {
    active: boolean
}

export const Button = styled.li<ButtonProps>`
    position: relative;
    list-style: none;
    width: 70px;
    height: 70px;
    z-index: 1;
    
    &:hover {
        cursor: pointer;
    }

    & .icon {

        position: relative;
        display: block;
        line-height: 75px;
        font-size: 1.5em;
        transition: 0.5s;
        margin-left: auto;
        margin-right: auto;
        margin-top: 25%;

        ${props => props.active && 'transform: translateY(-32px)'}
    }

    & .text {
        ${props => props.active && 'opacity: 1; transform: translateY(5px);'}
    }
`;

export const TitleButton = styled.span`
    position: absolute;
    font-weight: 400;
    font-size: 0.75em;
    letter-spacing: 0.05em;
    transition: 0.5s;
    opacity: 0;
    transform: translateY(15px);
    left: 25%;
`;

interface IndicatorProps {
    page: number;
}

export const Indicator = styled.div<IndicatorProps>`
    position: absolute;
    top: -50%;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: var(--purple);
    transition: 0.3s;
    
    transform: translateX(${props => props.page * 70}px);
`;

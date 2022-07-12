import styled from 'styled-components';

export const Container = styled.div`
    margin: 20px;
    width: 310px;
    height: 70px;
    position: absolute;
    z-index: 1000;

    bottom: 0;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;

    border-radius: 10px;
    transition: 0.5s;

    background: rgba(255, 255, 255, 0.13);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(2.1px);
    -webkit-backdrop-filter: blur(2.1px);
    border: 1px solid rgba(255, 255, 255, 0.11);
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
    font-size: 0.85em;
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
    top: -52%;

    width: 70px;
    height: 70px;

    border-radius: 50%;
    background: #5bcdf7;

    transition: 0.3s;

    -webkit-box-shadow: 0px 4px 13px 3px #171717; 
    box-shadow: 0px 4px 13px 3px #171717;
    
    transform: translateX(${props => props.page * 67}px);
`;

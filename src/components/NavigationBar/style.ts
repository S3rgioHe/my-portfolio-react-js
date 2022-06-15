import styled from 'styled-components';

export const Container = styled.div`
    margin: 20px;
    width: 310px;
    height: 70px;
    position: absolute;

    bottom: 0;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;

    background-color: #fff;
    box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.6);
    border-radius: 10px;
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
    top: -52%;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: var(--purple);
    transition: 0.3s;
    border: 6px solid var(--background);
    
    transform: translateX(${props => props.page * 67}px);

    &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: -22px;
        width: 20px;
        height: 20px;
        background: transparent;
        border-top-right-radius: 20px;
        box-shadow: 1px -10px 0 0 var(--background);
    }

    &::after {
        content: '';
        position: absolute;
        top: 50%;
        right: -22px;
        width: 20px;
        height: 20px;
        background: transparent;
        border-top-left-radius: 20px;
        box-shadow: -1px -10px 0 0 var(--background);
    }
`;

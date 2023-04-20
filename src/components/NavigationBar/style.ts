import styled, {keyframes} from 'styled-components';

const animationSlideUp = keyframes`
    0% {
        opacity: 0;
    }

    70% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
`;

export const Container = styled.div`
    margin-bottom: 20px;
    width: 320px;
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

    display: flex;
    justify-content: center;

    animation: ${animationSlideUp} 3s;
`;

export const ButtonList = styled.div`
    display: flex;
    flex-direction: row;
`;

interface ButtonProps {
    active: boolean
}

export const Button = styled.div<ButtonProps>`
    position: relative;
    width: 70px !important;
    height: 70px;
    z-index: 1;
    
    &:hover {
        cursor: pointer;
    }

    & .icon {
        display: block;
        font-size: 1.5rem;
        transition: 0.5s;
        margin-left: auto;
        margin-right: auto;
        margin-top: 25%;

        ${props => props.active ? 'color: #000;' : 'color: #5bcdf7;'}

        ${props => props.active && 'transform: translateY(-32px)'}
    }

    & .text {
        ${props => props.active && 'opacity: 1; transform: translateY(0px);'}
    }

    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const TitleButton = styled.span`
    font-weight: 400;
    font-size: 0.85rem;
    transition: 0.5s;
    opacity: 0;
    transform: translateY(15px);
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

    box-shadow: 0px 1px 10px 3px #171717;
    
    transform: translateX(${props => props.page * 70}px);
`;

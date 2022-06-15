import { Button, ButtonList, Container, Indicator, TitleButton } from "./style";
import { IoHomeOutline, IoPersonOutline, IoAlbumsOutline, IoPhonePortraitOutline } from "react-icons/io5";
import { useState } from "react";

interface NavigationBarProps {
    page: number;
    handleSetPage: (number: number) => void;
}

export function NavigationBar({ handleSetPage, page }: NavigationBarProps) {
    return (
        <>
            <Container>
                <ButtonList>
                    <Button active={page == 0} onClick={() => {handleSetPage(0)}}>
                        <IoHomeOutline className="icon"/>
                        <TitleButton className="text">Home</TitleButton>
                    </Button>
                    <Button active={page == 1} onClick={() => {handleSetPage(1)}}>
                        <IoPersonOutline className="icon"/>
                        <TitleButton className="text">Sobre</TitleButton>
                    </Button>
                    <Button active={page == 2} onClick={() => {handleSetPage(2)}}>
                        <IoAlbumsOutline className="icon"/>
                        <TitleButton className="text">Projetos</TitleButton>
                    </Button>
                    <Button active={page == 3} onClick={() => {handleSetPage(3)}}>
                        <IoPhonePortraitOutline className="icon"/>
                        <TitleButton className="text">Contato</TitleButton>
                    </Button>
                    <Indicator page={page}/>
                </ButtonList>
            </Container>
        </>
    )
}
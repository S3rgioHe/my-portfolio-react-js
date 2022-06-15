import { Button, ButtonList, Container, Indicator, TitleButton } from "./style";
import { IoHomeOutline, IoPersonOutline, IoAlbumsOutline, IoPhonePortraitOutline } from "react-icons/io5";
import { useState } from "react";


export function NavigationBar() {
    const [page, setPage] = useState(0);
    return (
        <>
            <Container>
                <ButtonList>
                    <Button active={page == 0} onClick={() => {setPage(0)}}>
                        <IoHomeOutline className="icon"/>
                        <TitleButton className="text">Home</TitleButton>
                    </Button>
                    <Button active={page == 1} onClick={() => {setPage(1)}}>
                        <IoPersonOutline className="icon"/>
                        <TitleButton className="text">Sobre</TitleButton>
                    </Button>
                    <Button active={page == 2} onClick={() => {setPage(2)}}>
                        <IoAlbumsOutline className="icon"/>
                        <TitleButton className="text">Projetos</TitleButton>
                    </Button>
                    <Button active={page == 3} onClick={() => {setPage(3)}}>
                        <IoPhonePortraitOutline className="icon"/>
                        <TitleButton className="text">Contato</TitleButton>
                    </Button>
                    <Indicator page={page}/>
                </ButtonList>
            </Container>
        </>
    )
}
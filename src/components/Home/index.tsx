import { Column, Container, Img, SubTitle, Title } from "./style";
import Typed from "react-typed";
import SergioPhoto from "../../assets/imgs/me.png";
interface HomeProps {
    active: boolean
}

export function Home({ active }: HomeProps) {
    return ( 
        <>
            <Container active={active} >
                <Column>
                    <Title>Sérgio Henrique</Title>
                    <SubTitle>Desenvolvedor Full Stack</SubTitle>
                    <Typed className="typed" strings={["Desenvolvedor React JS", "Desenvolvedor PHP", "Desenvolvedor Javascript", "Desenvolvedor Codeigniter"]} typeSpeed={90} loop />
                </Column>
                <Column>
                    <Img src={SergioPhoto} alt="Sérgio"/>
                </Column>
            </Container>
        </>
    );
}
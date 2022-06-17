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
                    <Typed className="typed" strings={["Palavra aleatoria", "1"]} typeSpeed={100} loop />
                </Column>
                <Column>
                    <Img src={SergioPhoto}/>
                </Column>
            </Container>
        </>
    );
}
import { Container, Summary, Content, ContentText, Title } from "./style";
import SergioImg from "../../assets/imgs/me.png";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
interface AboutProps {
    active: boolean
}
export function About( {active } : AboutProps) {
    return (
        <Container active={active}>
            <Summary>
                <img src={SergioImg} alt="Sérgio" />
                <Title>Sérgio Henrique</Title>
                <p>Full stack Developer</p>

                <a href="https://github.com/S3rgioHe" target="_blank">
                    <AiFillGithub className="icon"/>
                    <span>Github</span>
                </a>

            </Summary>
            <Content>
                <ContentText>
                Comecei a programar há mais de cinco anos, durante a minha adolescência. Desde então, tenho desenvolvido constantemente minhas habilidades como programador e sempre me desafiando a enfrentar projetos complexos. Sinto-me motivado e proativo em relação ao meu trabalho e minha maior satisfação profissional é entregar projetos que solucionem problemas, criem novas oportunidades e proporcionem boas experiências aos usuários.
                </ContentText>
            </Content>
        </Container>
    );
}
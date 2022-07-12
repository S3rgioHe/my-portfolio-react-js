import { Container, Summary, Content, ContentText, Title } from "./style";
import SergioImg from "../../assets/imgs/me.png";
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
                {/* Github ? */}
            </Summary>
            <Content>
                <ContentText>
                Iniciei com o Desenvolvimento Web a partir da necessidade de criar uma solução para um problema urbano. Esse foi um desafio proposto pela First Lego League, programa internacional de educação que participei no período escolar e desde então venho desenvolvendo minhas habilidades como programador, buscando assim uma empresa que me proporcione novas experiências e desafios.
                </ContentText>
            </Content>
        </Container>
    );
}
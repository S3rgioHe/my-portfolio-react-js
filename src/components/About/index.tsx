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
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec euismod, nisi eu consectetur euismod, nisl nisl
                    consectetur nisi, euismod euismod nisi nisl eu consectetur.
                    Donec euismod, nisi eu consectetur euismod, nisl nisl
                    consectetur nisi, euismod euismod nisi nisl eu consectetur.
                    Donec euismod, nisi eu consectetur euismod, nisl nisl
                </ContentText>
            </Content>
        </Container>
    );
}
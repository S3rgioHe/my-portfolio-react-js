import { Container, Summary, Content } from "./style";
import SergioImg from "../../assets/imgs/me.png";


interface AboutProps {
    active: boolean
}
export function About( {active } : AboutProps) {
    return (
        <Container active={active}>
            <Summary>
                <img src={SergioImg} alt="Sérgio" />
                <h4>Sérgio Henrique</h4>
                <p>Full stack Developer</p>
            </Summary>
            <Content>
                <Info>
                    <h3>Information</h3>
                </Info>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec euismod, nisi eu consectetur euismod, nisl nisl
                    consectetur nisi, euismod euismod nisi nisl eu consectetur.
                    Donec euismod, nisi eu consectetur euismod, nisl nisl
                    consectetur nisi, euismod euismod nisi nisl eu consectetur.
                    Donec euismod, nisi eu consectetur euismod, nisl nisl
                </p>
            </Content>
        </Container>
    );
}
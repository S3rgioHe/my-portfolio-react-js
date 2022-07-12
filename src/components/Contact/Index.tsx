import { Container, Item, Title, List, Content } from "./style";
import { MdOutlineEmail, MdSmartphone } from "react-icons/md";
import {BsLinkedin} from "react-icons/bs";
import qrcode from "../../assets/imgs/qrcode_test.png";

interface ContactProps {
    active: boolean
}

export function Contact( { active }: ContactProps ) {
    return (
        <Container active={active}>

            <Title>Contato</Title>
            <Content>
                <List>
                    <Item>
                        <MdOutlineEmail className="icon" />
                        <h2>Email -</h2>
                        <a href="mailto:sergiohenriquefn@gmail.com" target="_blank">
                            sergiohenriquefn@gmail.com
                        </a>

                    </Item>
                    <Item> 
                        <MdSmartphone className="icon"/>
                        <h2>Phone -</h2>
                        <a href="tel:+5581999058789">
                            +55 (81) 9990-58789
                        </a>
                    </Item>
                    <Item>
                        <BsLinkedin className="icon"/>
                        <h2>Linkedin -</h2>
                        <a href="https://www.linkedin.com/in/sergio-henrique-7b436a209/" target="_blank">
                            Sérgio Henrique
                        </a>
                    </Item>
                </List>
                <img src={qrcode} alt="qrcode" />
            </Content>
        </Container>
    )
}

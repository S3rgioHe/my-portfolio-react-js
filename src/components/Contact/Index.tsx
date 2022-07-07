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

            <Title>Contact & links </Title>
            <Content>
                <List>
                    <Item>
                        <MdOutlineEmail className="icon" />
                        <h2>Email</h2>
                    </Item>
                    <Item> 
                        <MdSmartphone className="icon"/>
                        <h2>Phone</h2>
                        <p>+55 (11) 99999-9999</p>
                    </Item>
                    <Item>
                        <BsLinkedin className="icon"/>
                        <h2>Linkedin</h2>
                    </Item>
                </List>
                <img src={qrcode} alt="qrcode" />
            </Content>
        </Container>
    )
}

import { Container, Item, Title } from "./style";
import { MdOutlineEmail, MdSmartphone } from "react-icons/md";
import {BsLinkedin} from "react-icons/bs";

interface ContactProps {
    active: boolean
}

export function Contact( { active }: ContactProps ) {
    return (
        <Container active={active}>
        
            <Title>Contact</Title>
            <Item>
                <MdOutlineEmail className="icon" />
                <h1>Email</h1>
            </Item>
            <Item> 
                <MdSmartphone className="icon"/>
                <h1>Phone</h1>
                <h1>+55 (11) 99999-9999</h1>
            </Item>
            <Item>
                <BsLinkedin className="icon"/>
                <h1>Linkedin</h1>

            </Item>
        </Container>
    )
}

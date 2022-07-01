import { Container, Item } from "./style"
import { useState } from "react";
import Carousel from "nuka-carousel"
import stmoney from "../../assets/imgs/stmoney.svg"
interface ProjectsProps {
    active: boolean
}

export function Projects({ active }: ProjectsProps) {

    return (
        <Container active={active}>
            <Carousel
                wrapAround={true}
                slidesToShow={1}
            >
                <Item>
                    <h1>Dt Money</h1>
                    <img src={stmoney} alt="stmoney" />
                </Item>
                <Item>
                    <h1>Teste 2</h1>
                    <img src={stmoney} alt="stmoney" />
                </Item>
            </Carousel>
        </Container>
    )
}
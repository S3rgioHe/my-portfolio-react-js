import { Container } from "./style"
import Carousel from "react-elastic-carousel";
import { useState } from "react";

interface ProjectsProps {
    active: boolean
}

export function Projects({ active }: ProjectsProps) {

    const [items, setItems] = useState([1, 2, 3, 4]);

    const breakPoints = [
        { width: 1, itemsToShow: 1 },
        { width: 550, itemsToShow: 2, itemsToScroll: 2 },
        { width: 768, itemsToShow: 3 },
        { width: 1200, itemsToShow: 4 }
    ];

    return (
        <Container active={active}>
            <h1>Teste</h1>
            <hr className="seperator" />
            <div className="carousel-wrapper">
                {/* <Carousel breakPoints={breakPoints}>
                    {items.map((item) => (
                        <Item key={item}>{item}</Item>
                    ))}
                </Carousel> */}
            </div>
        </Container>
    )
}
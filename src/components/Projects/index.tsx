import { Container, Item, Elements, Button1, Button2 } from "./style"
import Carousel, { NextButton } from "nuka-carousel"
import stmoney from "../../assets/imgs/stmoney.svg"
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

interface ProjectsProps {
    active: boolean
}


export function Projects({ active }: ProjectsProps) {

    return (
        <Container active={active}>
            <Carousel
                wrapAround={true}
                slidesToShow={1}
                autoplay={true}
                autoplayInterval={10000}
                renderCenterLeftControls={({ previousSlide }) => (
                    <Button1  onClick={previousSlide}>
                        <FaAngleLeft />
                    </Button1>
                  )}
                  renderCenterRightControls={({ nextSlide }) => (
                    <Button2 onClick={nextSlide}>
                      <FaAngleRight/>
                    </Button2>
                  )}
            >
                <Item>
                    <Elements>
                        <div>
                            <h1>Dt Money</h1>
                            <p>
                                Meu primeiro projeto utilizando biblioteca React Js, com objetivo de aprendizagem, fez parte do curso Ignite da Rocketseat.
                            </p>
                        </div>
                        <img src={stmoney} alt="stmoney" />
                    </Elements>
                </Item>
                <Item>
                    <h1>Teste 2</h1>
                    <img src={stmoney} alt="stmoney" />
                </Item>
            </Carousel>
        </Container>
    )
}
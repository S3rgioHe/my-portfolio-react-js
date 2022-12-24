import { Container, Item, Elements, Button1, Button2, Imgs } from "./style"
import Carousel, { NextButton } from "nuka-carousel"
import stmoney from "../../assets/imgs/stmoney.svg"
import atlasclients_home from "../../assets/imgs/atlasclients_home.png"
import atlasclients_team from "../../assets/imgs/atlasclients_team.png"
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
                    <Elements>
                        <div>
                            <h1>Atlas Clients</h1>
                            <p>
                                Plataforma comercial criada com o intuito de gerenciar clientes e agente por times, trazendo praticidade, o sistema conta com 5 tipos de usuários, cada um com ferramentas e telas dedicadas para cumprir com seu objetivo durante o trabalho, possibilitando um maior controle e uma visão mais ampla do relacionamento dos colaboradores com os seus clientes e seu desempenho.
                            </p>
                        </div>
                        <Imgs>
                            <img src={atlasclients_home} alt="stmoney" />
                            <img src={atlasclients_team} alt="stmoney" />
                        </Imgs>
                    </Elements>
                </Item>
                <Item>
                    
                </Item>
            </Carousel>
        </Container>
    )
}
import { Container, Item, Texts, Button1, Button2, Imgs } from "./style"
import Carousel, { NextButton } from "nuka-carousel"
import atlasclients_home from "../../assets/imgs/atlasclients_home.png"
import atlasclients_team from "../../assets/imgs/atlasclients_team.png"
import atlasleads_leads from "../../assets/imgs/atlasleads_leads.png"
import atlasleads_team from "../../assets/imgs/atlasleads_team.png"
import atlaswork_1 from "../../assets/imgs/atlaswork_1.png"
import atlaswork_2 from "../../assets/imgs/atlaswork_2.png"
import dtmoney_1 from "../../assets/imgs/dtmoney_1.png"
import dtmoney_2 from "../../assets/imgs/dtmoney_2.png"

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
                    <Texts>
                        <h1>Dt Money</h1>
                        <p>
                            Meu primeiro projeto utilizando biblioteca React Js, com objetivo de aprendizagem, fez parte do curso Ignite da Rocketseat.
                        </p>
                        <span>
                            Somente exibido projetos totalmente codificados por mim, conteúdo sensível das images censurado.
                        </span>
                    </Texts>
                    <Imgs>
                        <img src={dtmoney_1}/>
                        <img src={dtmoney_2}/>
                    </Imgs>
                </Item>
                <Item>
                    <Texts>
                        <h1>Atlas Clients</h1>
                        <p>
                            Plataforma comercial criada com o intuito de gerenciar clientes e agente por times, trazendo praticidade, o sistema conta com 5 tipos de usuários, cada um com ferramentas e telas dedicadas para cumprir com seu objetivo durante o trabalho, possibilitando um maior controle e uma visão mais ampla do relacionamento dos colaboradores com os seus clientes e seu desempenho.
                        </p>
                        <span>
                            Somente exibido projetos totalmente codificados por mim, conteúdo sensível das images censurado.
                        </span>
                    </Texts>
                    <Imgs>
                        <img src={atlasclients_home}/>
                        <img src={atlasclients_team}/>
                    </Imgs>
                </Item>
                <Item>
                    <Texts>
                        <h1>Atlas Leads</h1>
                        <p>
                            Plataforma de gerenciamento de leads, voltada ao mercado de marketing digital, possibilita o gerenciamento, categorização e distribuição dos leads para times e agentes, contanto com ferramentas úteis para call centers.
                        </p>
                        <span>
                            Somente exibido projetos totalmente codificados por mim, conteúdo sensível das images censurado.
                        </span>
                    </Texts>
                    <Imgs>
                        <img src={atlasleads_team}/>
                        <img src={atlasleads_leads}/>
                    </Imgs>
                </Item>
                <Item>
                    <Texts>
                        <h1>Atlas Work</h1>
                        <p>
                            Com o objetivo de gerenciar grupos de empresas, esse sistema possibilita a divisão de funcionários por times e empresas, trazendo diversas ferramentas que ajudam na organização de informações importantes dos funcionários.
                        </p>
                        <span>
                            Somente exibido projetos totalmente codificados por mim, conteúdo sensível das images censurado.
                        </span>
                    </Texts>
                    <Imgs>
                        <img src={atlaswork_2}/>
                        <img src={atlaswork_1}/>
                    </Imgs>
                </Item>
            </Carousel>
        </Container>
    )
}
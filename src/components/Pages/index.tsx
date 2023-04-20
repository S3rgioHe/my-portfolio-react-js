import { About } from "../About"
import { Contact } from "../Contact/Index"
import { Home } from "../Home"
import { Projects } from "../Projects"
import { Container } from "./style"

interface PagesPros {
    page: number
}

export function Pages({ page }: PagesPros) {

    return (
        <>
            <Container>                
                <Home active={page === 0}/>
                <About active={page === 1}/>
                <Projects active={page === 2}/>
                <Contact active={page === 3}/>
            </Container>
        </>
    )
}
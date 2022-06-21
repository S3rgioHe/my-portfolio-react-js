import { Container } from "./style"

interface ProjectsProps {
    active: boolean
}

export function Projects({ active }: ProjectsProps) {
    return (
        <Container active={active}>
            <h1>Teste</h1>
        </Container>
    )
}
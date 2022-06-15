import { Container } from "./style";

interface HomeProps {
    active: boolean
}

export function Home({ active }: HomeProps) {
    return (
        <Container active={active} >
            <h1>Home</h1>
        </Container>
    );
}
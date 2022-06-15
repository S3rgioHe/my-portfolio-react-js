import { Home } from "../Home"

interface PagesPros {
    page: number
}

export function Pages({ page }: PagesPros) {

    return (
        <Home active={page === 0}/>
    )
}
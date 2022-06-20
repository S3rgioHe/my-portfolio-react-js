import { About } from "../About"
import { Home } from "../Home"

interface PagesPros {
    page: number
}

export function Pages({ page }: PagesPros) {

    return (
        <>
            <Home active={page === 0}/>
            <About active={page === 1}/>
        </>
    )
}
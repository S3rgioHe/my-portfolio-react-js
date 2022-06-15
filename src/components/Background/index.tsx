import { Container, Row } from "./style";
import { DiBootstrap, DiChrome, DiCode, DiCodeigniter, DiCss3, DiDatabase, DiGit, DiGithubAlt, DiGithubBadge, DiGitMerge, DiHtml5, DiJavascript1, DiPhp, DiPostgresql, DiReact, DiTerminal, DiUbuntu, DiWindows } from "react-icons/di";
export function Background() {

    function randomIcons() {
        const icons = [
            <DiCodeigniter className="icon" size={70}/>,
            <DiBootstrap className="icon" size={70}/>,
            <DiCode className="icon" size={70}/>,
            <DiCss3 className="icon" size={70}/>,
            <DiDatabase className="icon" size={70}/>,
            <DiGit className="icon" size={70}/>,
            <DiGithubBadge className="icon" size={70}/>,
            <DiHtml5 className="icon" size={70}/>,
            <DiJavascript1 className="icon" size={70}/>, 
            <DiPhp className="icon" size={70}/>,
            <DiPostgresql className="icon" size={70}/>,
            <DiTerminal className="icon" size={70}/>,
            <DiWindows className="icon" size={70}/>,
            <DiUbuntu className="icon" size={70}/>,
            <DiReact className="icon" size={70}/>,
            <DiGithubAlt className="icon" size={70}/>,
            <DiChrome className="icon" size={70}/>,
            <DiGitMerge className="icon" size={70}/>,
            
            
        ];

        const randomIndex = Math.floor(Math.random() * icons.length);
        return icons[randomIndex];
    }

    function getRandomIntInclusive(min: number, max: number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

    return (
        <Container>
            <Row>
                {[...Array(500)].map(() => randomIcons())}
            </Row>
        </Container>
    )
}
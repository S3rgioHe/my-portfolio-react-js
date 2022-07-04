import { Container, Row } from "./style";
import { useState } from "react";
import { DiBootstrap, DiChrome, DiCode, DiCodeigniter, DiCss3, DiDatabase, DiGit, DiGithubAlt, DiGithubBadge, DiGitMerge, DiHtml5, DiJavascript1, DiPhp, DiPostgresql, DiReact, DiTerminal, DiUbuntu, DiWindows } from "react-icons/di";
export function Background() {

    const iconSize = 70;

    function randomIcons() {
        const icons = [
            <DiCodeigniter className="icon" size={iconSize}/>,
            <DiBootstrap className="icon" size={iconSize}/>,
            <DiCode className="icon" size={iconSize}/>,
            <DiCss3 className="icon" size={iconSize}/>,
            <DiDatabase className="icon" size={iconSize}/>,
            <DiGit className="icon" size={iconSize}/>,
            <DiGithubBadge className="icon" size={iconSize}/>,
            <DiHtml5 className="icon" size={iconSize}/>,
            <DiPostgresql className="icon" size={iconSize}/>,
            <DiTerminal className="icon" size={iconSize}/>,
            <DiWindows className="icon" size={iconSize}/>,
            <DiUbuntu className="icon" size={iconSize}/>,
            <DiReact className="icon" size={iconSize}/>,
            <DiGithubAlt className="icon" size={iconSize}/>,
            <DiChrome className="icon" size={iconSize}/>,
            <DiGitMerge className="icon" size={iconSize}/>,
        ];

        const randomIndex = Math.floor(Math.random() * icons.length);
        return icons[randomIndex];
    }

    function getRandomIntInclusive(min: number, max: number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const [icons, setIcons] = useState([...Array(500)].map(() => randomIcons()));

    return (
        <Container>
            <Row>
                {icons}
            </Row>
        </Container>
    )
}
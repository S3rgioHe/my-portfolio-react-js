import { Container, Row } from "./style";
import { useState } from "react";
import { DiBootstrap, DiCode, DiCodeigniter, DiCss3, DiDatabase, DiGit, DiGithubAlt, DiGithubBadge, DiGitMerge, DiHtml5, DiJavascript1, DiPhp, DiPostgresql, DiReact, DiTerminal, DiUbuntu, DiWindows, DiLaravel, DiAndroid } from "react-icons/di";

import { TbDrone } from "react-icons/tb";

import { SiIos } from "react-icons/si";

import { BsLaptop } from "react-icons/bs";


export function Background() {

    const iconSize = 80;

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
            <DiGitMerge className="icon" size={iconSize}/>,
            <DiLaravel className="icon" size={iconSize}/>,
            <DiPhp className="icon" size={iconSize}/>,
            <DiJavascript1 className="icon" size={iconSize}/>,
            <TbDrone className="icon" size={iconSize}/>,
            <DiAndroid className="icon" size={iconSize}/>,
            <SiIos className="icon" size={iconSize}/>,
            <BsLaptop className="icon" size={iconSize}/>,
        ];

        return icons[Math.floor(Math.random() * icons.length)];
    }

    const [icons, setIcons] = useState([...Array(300)].map(() => randomIcons()));

    return (
        <Container>
            <Row>
                {icons}
            </Row>
        </Container>
    )
}
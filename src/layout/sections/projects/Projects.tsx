import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/container/Container.styled";
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle";
import {ProjectCard} from "../../../components/sectionSubTitle/ProjectCard";
import CardImg from '../../../assets/img/projectImg.jpg'
import {Theme} from "../../../components/styles/Theme";

const data = {
    title: 'Projects',
    units: [
        {
            title: 'Project 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            imgUrl: CardImg
        },
        {
            title: 'Project 2',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
            imgUrl: CardImg
        },
    ]
}

export function Projects() {
    const {title, units} = data

    const card = units.map(({title, description, imgUrl})=>
        <ProjectCard key={title} title={title} description={description} imgUrl={imgUrl}/>
    )

    return (
        <StyledProjects>
            <Container>
                <SectionTitle title={title}/>
                {card}
            </Container>
        </StyledProjects>
    );
}


const StyledProjects = styled.section`
    background-color: ${Theme.colors.secondBg};
`



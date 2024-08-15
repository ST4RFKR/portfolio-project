import React from 'react';
import {SectionSubTitle} from "./SectionSubTitle";
import {Button} from "../button/Button";
import styled from "styled-components";

type ProjectCardPropsType = {
    imgUrl: string,
    title:string,
    description: string
}

export function ProjectCard(props: ProjectCardPropsType) {
    const {imgUrl, description, title} = props

    return (
        <StyledCardProject>
            <img src={imgUrl} alt=""/>

            <SectionSubTitle>{title}</SectionSubTitle>
            <p>{description}</p>
            <Button>Look It Up</Button>
        </StyledCardProject>
    );
}

const StyledCardProject = styled.div`
    

`

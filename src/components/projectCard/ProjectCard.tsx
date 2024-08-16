import React from 'react';
import {SectionSubTitle} from '../sectionSubTitle/SectionSubTitle';
import {Button} from '../button/Button';
import styled from 'styled-components';

type ProjectCardPropsType = {
    imgUrl: string;
    title: string;
    description: string;
};

export function ProjectCard(props: ProjectCardPropsType) {
    const {imgUrl, description, title} = props;

    return (
        <StyledCardProject>
            <img src={imgUrl} alt=""/>

            <SectionSubTitle>{title}</SectionSubTitle>
            <p>{description}</p>
            <Button>Look It Up</Button>
        </StyledCardProject>
    );
}

const StyledCardProject = styled.article`
    max-width: 550px;
    background: #0f1624;
    border: 1px solid #a39d9d;
    border-radius: 50px 0px;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
        padding: 25px 25px 40px 25px;
    }

    p {
        font-weight: 500;
        font-size: 18px;
        line-height: 27px;
        padding: 0 25px;
        margin-bottom: 50px;
    }

    a {
        display: inline-block;
        margin: 0 0 40px 25px;
        align-self: self-start;
    }
`;

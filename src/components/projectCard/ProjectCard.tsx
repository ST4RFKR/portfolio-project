import React from 'react';
import {SectionSubTitle} from '../sectionSubTitle/SectionSubTitle';
import {Link} from '../button/Link';
import styled from 'styled-components';
import {Theme} from "../styles/Theme";

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
            <Link>Look It Up</Link>
        </StyledCardProject>
    );
}

const StyledCardProject = styled.article`
    max-width: 550px;
    background: ${Theme.colors.mainBg};
    border: 2px solid #a39d9d;
    border-radius: 50px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 60px;

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

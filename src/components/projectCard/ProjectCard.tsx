import React from 'react';
import {SectionSubTitle} from '../sectionSubTitle/SectionSubTitle';
import {Link} from '../button/Link';
import styled from 'styled-components';
import {Theme} from "../styles/Theme";
import {font} from "../styles/Common";

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
    
    @media ${Theme.media.table} {
        max-width:calc(550px - (550px / 3));
    }

    img {
        width: 500px;
        height: 280px;
        object-fit: cover;
        padding: 25px 25px 40px 25px;
        
        @media ${Theme.media.table} {
            width: calc(500px - (500px / 3));
            height: calc(280px - (280px / 3));
            
        }
    }

    p {
        ${font({weight: 500, maxSize: 18, minSize: 14, lineHeight: '27px'})}
        padding: 0 25px;
        margin-bottom: 50px;
    }

    a {
        display: inline-block;
        margin: 0 0 40px 25px;
        align-self: self-start;
    }
`;

import React from 'react';
import styled from 'styled-components';
import {Container} from '../../../components/container/Container.styled';
import {Theme} from '../../../components/styles/Theme';
import {SectionTitle} from '../../../components/sectionTitle/SectionTitle';
import {Technology} from '../../../components/technology/Technology';


const data = {
    title: 'My Tech Stack',
    subTitle: 'Technologies I’ve been working with recently',
    urlIcon: ['html5', 'css3', 'js', 'react', 'redux', 'tailwind', 'sass', 'git1', 'GSAP', 'vscode'],
};

export function TechStack() {
    const {title, urlIcon} = data;

    const CreateTechnology = urlIcon.map((item) => (
        <Technology key={item} urlIcon={item}></Technology>
    ));

    return (
        <StyledTechStack>
            <Container>
                <SectionTitle title={title}/>
                <StyledTechStackSubTitle>
                    Technologies I’ve been working with recently
                </StyledTechStackSubTitle>
                {/*<Technology urlIcon={'html5'}></Technology>*/}
                {/*<Technology urlIcon={'css3'}></Technology>*/}
                {/*<Technology urlIcon={'js'}></Technology>*/}
                {/*<Technology urlIcon={'react'}></Technology>*/}
                {/*<Technology urlIcon={'redux'}></Technology>*/}
                {/*<Technology urlIcon={'tailwind'}></Technology>*/}
                {/*<Technology urlIcon={'sass'}></Technology>*/}
                {/*<Technology urlIcon={'git1'}></Technology>*/}
                {/*<Technology urlIcon={'GSAP'}></Technology>*/}
                {/*<Technology urlIcon={'vscode'}></Technology>*/}
                {CreateTechnology}
            </Container>
        </StyledTechStack>
    );
}

const StyledTechStack = styled.section`


    h3 {
    }
`;
const StyledTechStackSubTitle = styled.h3`
    font-weight: 400;
    font-size: 32px;
    line-height: 26px;
`;

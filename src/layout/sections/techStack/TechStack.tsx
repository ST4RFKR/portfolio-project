import React from 'react';
import styled from 'styled-components';
import {Container} from '../../../components/container/Container.styled';
import {Theme} from '../../../components/styles/Theme';
import {SectionTitle} from '../../../components/sectionTitle/SectionTitle';
import {Technology} from '../../../components/technology/Technology';
import {FlexContainer} from "../../../components/FlexContainer/FlexContainer";


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
                <FlexContainer direction={'column'} align={'center'}>
                    <SectionTitle title={title}/>
                    <StyledTechStackSubTitle>
                        Technologies I’ve been working with recently
                    </StyledTechStackSubTitle>
                    <StyledGridContainer>
                        {CreateTechnology}
                    </StyledGridContainer>
                </FlexContainer>

            </Container>
        </StyledTechStack>
    );
}

const StyledTechStack = styled.section`
    padding: ${Theme.padding.main};

    h3 {
    }
`;
const StyledTechStackSubTitle = styled.h3`
    font-weight: 400;
    font-size: 32px;
    line-height: 26px;
    margin-bottom: ${Theme.margin.main};
`;
const StyledGridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 100px;
    justify-content: center;
    align-items: center;
    margin-bottom: ${Theme.margin.main};
`

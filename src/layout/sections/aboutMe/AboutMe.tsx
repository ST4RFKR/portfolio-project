import React from 'react';
import styled from 'styled-components';
import {Container} from '../../../components/container/Container.styled';
import {SectionTitle} from '../../../components/sectionTitle/SectionTitle';
import {FlexContainer} from '../../../components/FlexContainer/FlexContainer';
import AboutImg from '../../../assets/img/second-photo.webp';
import {Theme} from '../../../components/styles/Theme';


export function AboutMe() {
    return (
        <StyledAboutMe>
            <Container>
                <SectionTitle title={'About Me'}/>
                <FlexContainer justify={'spase-between'} >
                    <StyledAboutMeText>
                        I’m passionate about frontend development, creating interactive and modern interfaces,
                        optimizing UX/UI, and implementing cutting-edge web technologies.
                    </StyledAboutMeText>
                    <Photo src={AboutImg} alt=""/>
                </FlexContainer>
            </Container>
        </StyledAboutMe>
    );
}

const StyledAboutMe = styled.section`
    position: relative;
    z-index: 1;
`;

const StyledAboutMeText = styled.p`

    font-weight: 600;
    font-size: 32px;
    line-height: 48px;
    margin-top: ${Theme.margin.main};

`
const Photo = styled.img`

`

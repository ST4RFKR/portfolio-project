import React from 'react';
import styled from 'styled-components';
import {Container} from '../../../components/container/Container.styled';
import {SectionTitle} from '../../../components/sectionTitle/SectionTitle';
import {FlexContainer} from '../../../components/FlexContainer/FlexContainer';
import AboutImg from '../../../assets/img/second-photo.webp';
import {Theme} from '../../../components/styles/Theme';
import {font} from "../../../components/styles/Common";


export function AboutMe() {
    return (
        <StyledAboutMe id={'about_me'}>
            <Container>
                <SectionTitle title={'About Me'}/>
                <FlexContainer justify={'spase-between'} wrap={'wrap'}
                align={'center'}>
                    <StyledAboutMeText>
                        I’m passionate about frontend development, creating interactive and modern interfaces,
                        optimizing UX/UI, and implementing cutting-edge web technologies.
                    </StyledAboutMeText>
                    <Photo src={AboutImg} alt="AboutPhoto"/>
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
    align-self: flex-start;
    max-width: 758px;
    width: 100%;
    ${font({weight: 600, maxSize: 32, minSize: 14, lineHeight: '40px'})}
    margin-bottom: ${Theme.margin.main};
    margin-top: ${Theme.margin.main};

`
const Photo = styled.img`
    width: 339px;
    height: 507px;
    object-fit: cover;
    margin: 0 auto;
    
    @media ${Theme.media.table} {
        align-self: center;
    }
`

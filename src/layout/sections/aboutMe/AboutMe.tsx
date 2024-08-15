import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/container/Container.styled";
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle";
import {FlexContainer} from "../../../components/FlexContainer/FlexContainer";
import AboutImg from '../../../assets/img/second-photo.png'
import {Theme} from "../../../components/styles/Theme";

export function AboutMe() {
    return (
        <StyledAboutMe>
            <Container>
                <SectionTitle title={'About Me'}/>
                <FlexContainer>
                    <p>I’m passionate about frontend development, creating interactive and modern interfaces, optimizing
                        UX/UI, and implementing cutting-edge web technologies.</p>
                    <img src={AboutImg} alt=""/>
                </FlexContainer>

            </Container>
        </StyledAboutMe>
    );
}

const StyledAboutMe = styled.section`
    background-color: ${Theme.colors.secondBg};`



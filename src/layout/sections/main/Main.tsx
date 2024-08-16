import React from 'react';
import styled from 'styled-components';
import mainPhoto from '../../../assets/img/header-img.webp';
import {FlexContainer} from '../../../components/FlexContainer/FlexContainer';
import {Container} from '../../../components/container/Container.styled';
import {Button} from '../../../components/button/Button';
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import {Theme} from "../../../components/styles/Theme";

type MainPropsType = {};

export function Main(props: MainPropsType) {
    return (
        <StyledMain>
            <Container>
                <FlexContainer justify={'space-between'} align={'center'} >
                    <Wrapper>
                        <span>Hi 👋,</span>
                        <h2>My name is
                            <Name>Eugene</Name>
                        </h2>
                        <StyledMainTitle>I FRONTEND DEVELOPER</StyledMainTitle>
                        <Button>Let’s Begin</Button>
                    </Wrapper>
                    <Photo src={mainPhoto}/>
                </FlexContainer>
            </Container>
        </StyledMain>
    );
}

const StyledMain = styled.section`
 min-height: 100vh;
    display: flex;
    
    span{

        font-style: normal;
        font-weight: 600;
        font-size: 48px;
        line-height: 50px;

    }
    h2{
        font-style: normal;
        font-weight: 600;
        font-size: 48px;
        line-height: 50px;
    }
`;
const Photo = styled.img`
    width: 457px;
    height: 431px;
    object-fit: cover;
    z-index: 1;
`;
const StyledMainTitle = styled.h1`
    font-style: normal;
    font-weight: 700;
    font-size: 58px;
`
const Name = styled.div`
    background: ${Theme.colors.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
    padding: 10px 0;
`

const Wrapper = styled.div``

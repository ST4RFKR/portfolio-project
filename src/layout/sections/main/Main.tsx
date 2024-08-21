import React from 'react';
import styled from 'styled-components';
import mainPhoto from '../../../assets/img/header-img.webp';
import {FlexContainer} from '../../../components/FlexContainer/FlexContainer';
import {Container} from '../../../components/container/Container.styled';
import {Link} from '../../../components/button/Link';

import {Theme} from "../../../components/styles/Theme";
import {font} from "../../../components/styles/Common";
import Typewriter from 'typewriter-effect';


type MainPropsType = {};

export function Main(props: MainPropsType) {
    return (
        <StyledMain>
            <Container>
                <FlexContainer justify={'space-between'} align={'center'} wrap={'wrap'}>
                    <Wrapper>
                        <span>Hi 👋,</span>
                        <h2>My name is
                            <Name>Eugene.</Name>
                        </h2>

                        <StyledMainTitle>
                            <p>I FRONTEND DEVELOPER</p>
                            <Typewriter
                                options={{
                                    strings: ['A FRONT-END DEVELOPER'],
                                    autoStart: true,
                                    delay: 200,
                                    loop: true,
                                    cursor:'/'


                                }}
                            />

                        </StyledMainTitle>
                        <Link>Let’s Begin</Link>
                    </Wrapper>
                    <Photo src={mainPhoto} alt={'mainPhoto'}/>
                </FlexContainer>
            </Container>
        </StyledMain>
    );
}

const StyledMain = styled.main`
    min-height: 100vh;
    display: flex;
    p{
        display: none;
    }

    span {
        ${font({weight: 600, maxSize: 48, minSize: 40, lineHeight: '50px'})}


    }

    h2 {
        ${font({weight: 600, maxSize: 48, minSize: 38, lineHeight: '50px'})}
    }
`;
const Wrapper = styled.div`
    max-width: 681px;
    width: 100%;
    margin: 0 auto;
    
`
const Photo = styled.img`
    width: 457px;
    height: 431px;
    object-fit: cover;
    margin: 0 auto;
    @media ${Theme.media.table} {
        width: calc(457px - (457px / 3));
        height: calc(431px - (431px / 3));

    }

`;
const StyledMainTitle = styled.h1`
    ${font({weight: 700, maxSize: 52, minSize: 38, lineHeight: '50px'})}
    margin-bottom: ${Theme.margin.main}
`
const Name = styled.div`
    background: ${Theme.colors.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
    padding: 10px 0;
    .Typewriter__cursor{
        font-size: 40px;
        color: ${Theme.colors.mainText}
    }
`



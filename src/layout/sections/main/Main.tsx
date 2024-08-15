import React from 'react';
import styled from "styled-components";
import mainPhoto from '../../../assets/img/header-img.png'
import {FlexContainer} from "../../../components/FlexContainer/FlexContainer";
import {Container} from "../../../components/container/Container.styled";
import {Button} from "../../../components/button/Button";

type MainPropsType = {}

export function Main(props: MainPropsType) {
    return (
        <StyledMain>
            <Container>
                <FlexContainer justify={'space-between'}>
                    <div>
                        <span>Hi 👋,</span>
                        <h2>My name is <span>Eugene</span></h2>
                        <h1>I FRONTEND DEVELOPER</h1>
                        <Button>Let’s Begin</Button>
                    </div>
                    <div>
                        <Photo src={mainPhoto}/>
                    </div>
                </FlexContainer>
            </Container>
        </StyledMain>


    );
}

const Photo = styled.img`

`
const StyledMain = styled.section`
background-color: #0F1624;

`





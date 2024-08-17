import React from 'react';
import styled from "styled-components";
import {Container} from "../../components/container/Container.styled";
import {SocialLinks} from "../../components/socialLinks/SocialLinks";
import {FlexContainer} from "../../components/FlexContainer/FlexContainer";
import {Theme} from "../../components/styles/Theme";

export function Footer() {
    return (
        <StyledFooter>
            <Container>
                <FlexContainer align={'center'} justify={'center'}>
                    <SocialLinks text></SocialLinks>
                </FlexContainer>
            </Container>
        </StyledFooter>
    );
}

const StyledFooter = styled.footer`
    background-color: ${Theme.colors.secondBg};
    padding: ${Theme.padding.main} 0;
`


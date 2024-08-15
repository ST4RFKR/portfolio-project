import React from 'react';
import styled from "styled-components";
import {Container} from "../../components/container/Container.styled";
import {SocialLinks} from "../../components/socialLinks/SocialLinks";
import {FlexContainer} from "../../components/FlexContainer/FlexContainer";

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

`


import React from 'react';
import styled from 'styled-components';
import {Menu} from './menu/Menu';
import {Logo} from '../../components/logo/Logo';
import {SocialLinks} from '../../components/socialLinks/SocialLinks';
import {Container} from '../../components/container/Container.styled';
import {FlexContainer} from "../../components/FlexContainer/FlexContainer";
import {Theme} from "../../components/styles/Theme";
import {MobileMenu} from "./MobileMenu/MobileMenu";



type HeaderPropsType = {};

export function Header(props: HeaderPropsType) {
    return (
        <StyledHeader>
            <Container>
                <FlexContainer align={'center'} justify={'space-between'}>
                    <Logo/>
                    <Menu/>
                    <MobileMenu/>
                    <SocialLinks/>
                </FlexContainer>
            </Container>
        </StyledHeader>
    );
}

const StyledHeader = styled.header<HeaderPropsType>`
    background-color: ${Theme.colors.secondBg};
    padding: 15px 0;
    position: relative;
    z-index: 1;
`;



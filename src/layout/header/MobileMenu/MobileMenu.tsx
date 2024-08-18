import React from 'react';
import styled, {css} from 'styled-components';
import {LinkItem} from "../../../components/linkItem/LinkItem";
import {Theme} from "../../../components/styles/Theme";
import {SocialLinks} from "../../../components/socialLinks/SocialLinks";




const data = ['Projects', 'Tech Stack','About me','Contact']
export function MobileMenu() {
  return (
    <StyledMobileMenu >
        <BurgerButton isOpen={false}><span></span></BurgerButton>
        <MobileMenuWrapper isOpen={false}>
            <MobileWrapperList>
                {data.map((title) => (
                    <LinkItem title={title}/>
                ))}
            </MobileWrapperList>
            <SocialLinks text></SocialLinks>
        </MobileMenuWrapper>

    </StyledMobileMenu>
  );
}

const StyledMobileMenu = styled.nav`
    display: none;
    
    @media ${Theme.media.table} {
        display: block;
    }


    ul li {
        position: relative;
        text-decoration: none;
        color: #fff;
        padding-bottom: 5px;
        transition: all;


        &::after {
            position: absolute;
            content: '';
            width: 100%;
            height: 2px;
            left: 0;
            bottom: 0;
            background: linear-gradient(90deg, ${Theme.colors.mainText} -1.79%, rgba(255, 255, 255, 0) 90%);
            transition: .6s;
            opacity: 0;

        }

        &:hover::after {
            opacity: 1;
        }
    }



`;

const BurgerButton = styled.button<{isOpen:boolean}>`

    position: fixed;
    top: -111px;
    right: -100px;
    width: 200px;
    height: 200px;
    z-index: 101;

    span {
        display: block;
        width: 36px;
        height: 2px;
        background-color: ${Theme.colors.mainText};
        position: absolute;
        left: 48px;
        bottom: 50px;

        ${props => props.isOpen && css<{ isOpen: boolean }>`
            background-color: ${Theme.colors.transparent};

        `}
        &::before {
            content: '';
            width: 36px;
            height: 2px;
            left: 0;
            background-color: ${Theme.colors.mainText};
            position: absolute;
            transform: translateY(-10px);

            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: translateY(0) rotate(-45deg);
            `}
        }

        &::after {
            content: '';
            width: 36px;
            height: 2px;
            left: 0;
            background-color: ${Theme.colors.mainText};
            position: absolute;
            transform: translateY(10px);
            ${props => props.isOpen && css<{ isOpen: boolean }>`
                transform: translateY(0) rotate(45deg);
            `}
        }

    }




`
const MobileMenuWrapper = styled.div<{isOpen:boolean}>`
    position: fixed;
    background-color: rgba(15, 22, 36, 0.9);
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 100;

    
    width: 100%;
    height: 100%;

    display: none;

    ${props => props.isOpen && css<{isOpen:boolean}>`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center; 
    `}



`;
const MobileWrapperList = styled.ul`
margin: 20px 0;
    li{
        margin: 20px 0;
    }
`

import React from 'react';
import styled from 'styled-components';
import {LinkItem} from "../../../components/linkItem/LinkItem";
import {Theme} from "../../../components/styles/Theme";


type MenuPropsType = {};

// const data = ['Projects', 'Tech Stack','About me','Contact']
const data = [{
    title: 'Projects',
    id: 'projects'
},
    {
        title: 'Tech Stack',
        id: 'tech_stack'
    },
    {
        title: 'About me',
        id: 'about_me'
    },
    {
        title: 'Contact',
        id: 'contact'
    }]

export function Menu(props: MenuPropsType) {
    return (
        <StyledMenu>
            <ul>
                {data.map((item) => (
                    <LinkItem key={item.title} title={item.title} url={item.id}/>
                ))}
            </ul>
        </StyledMenu>
    );
}

const StyledMenu = styled.nav<MenuPropsType>`
    ul {
        list-style: none;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    a {
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

    li + li {
        margin-left: 45px;


    }

    @media ${Theme.media.table} {
        display: none;
    }
`;

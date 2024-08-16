import React from 'react';
import styled from 'styled-components';
import {LinkItem} from "../linkItem/LinkItem";


type MenuPropsType = {};

const data = ['Projects', 'Tech Stack','About me','Contact']
export function Menu(props: MenuPropsType) {
  return (
    <StyledMenu>
      <ul>
        {data.map((title) => (
            <LinkItem title={title}/>
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
        text-decoration: none;
        color: #fff;
    }

    li + li {
        margin-left: 60px;
    }
`;

import React from 'react';
import styled from 'styled-components';
import {ListItem} from "../listItem/ListItem";
import {Theme} from "../styles/Theme";

type SocialLinksPropsType = {
    text?: boolean,
}
const data = [
    {
        title: 'GMAIL',
        iconUrl: 'gmail'
    },
    {
        title: 'GIT',
        iconUrl: 'git'
    },
    {
        title: 'LINKEDIN',
        iconUrl: 'linked'
    },
    {
        title: 'TG',
        iconUrl: 'tg'
    },

]


export function SocialLinks(props: SocialLinksPropsType) {
    const {text} = props;

    return (
        <StyledList>
            {data.map((item) => (
                <ListItem
                    key={item.title}
                    isText={text}
                    title={item.title}
                    iconUrl={item.iconUrl}></ListItem>
            ))}
        </StyledList>
    );
}

const StyledList = styled.ol`
    list-style: none;
    display: flex;
    justify-content: space-between;

    li + li {
        margin-left: 22px;
    }
    
`;

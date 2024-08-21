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
        iconUrl: 'gmail',
        url: 'https://gmail.com'
    },
    {
        title: 'GIT',
        iconUrl: 'git',
        url: 'https://github.com/'

    },
    {
        title: 'LINKEDIN',
        iconUrl: 'linked',
        url: 'https://www.linkedin.com/'
    },
    {
        title: 'TG',
        iconUrl: 'tg',
        url: 'https://web.telegram.org/'
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
                    url={item.url}
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
        @media ${Theme.media.table} {
                margin-left: 15px;
    }
    
`;

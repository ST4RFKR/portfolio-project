import React from 'react';
import {Icon} from "../icon/Icon";
import styled from "styled-components";
import {FlexContainer} from "../FlexContainer/FlexContainer";
import {Theme} from "../styles/Theme";

type ListItemPropsType = {
    isText?: boolean,
    iconUrl: string
    title?: string
}

export function ListItem(props: ListItemPropsType) {
    const {isText,iconUrl,title} = props;
    return (
        <li>
            <a href="#">
                {/*<FlexContainer justify={'center'} align={'center'} direction={'column'}>*/}
                <Icon urlIcon={iconUrl}/>
                {isText && <StyledListItemText>{title}</StyledListItemText>}
                {/*</FlexContainer>*/}

            </a>
        </li>
    );
}

const StyledListItemText = styled.span`
    font-size: 10px;
    display: flex;
    justify-content: center;
    font-weight: bold;
    background: ${Theme.colors.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
`


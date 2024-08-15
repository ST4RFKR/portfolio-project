import React from 'react';
import styled from "styled-components";

type LinkItemPropsType = {
    title: string
}
export function LinkItem(props: LinkItemPropsType) {
    const {title} = props;
    return (
        <StyledLinkItem>
            <a href="#" >{title}</a>
        </StyledLinkItem>
    );
}

const StyledLinkItem = styled.li`

`

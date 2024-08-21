import React from 'react';
import styled from "styled-components";
import {Link} from "react-scroll";

type LinkItemPropsType = {
    title: string,
    url: string
}

export function LinkItem(props: LinkItemPropsType) {
    const {title,url} = props;
    return (
        <StyledLinkItem>
            <NavLink to={url}
                     smooth={true}>{title}</NavLink>
        </StyledLinkItem>
    );
}

const StyledLinkItem = styled.li`

    
`
const NavLink = styled(Link)``

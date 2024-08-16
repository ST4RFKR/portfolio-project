import styled from "styled-components";

import React from 'react';
import {Icon} from "../icon/Icon";

type TechnologyPropsType = {
    urlIcon: string
}

export function Technology(props: TechnologyPropsType) {
    return (
        <StyledTechnology>
            <Icon width={'112'} height={'110'} viewBox={'0 0 110 110'} urlIcon={props.urlIcon}/>
        </StyledTechnology>
    );
}


export const StyledTechnology = styled.div`

`

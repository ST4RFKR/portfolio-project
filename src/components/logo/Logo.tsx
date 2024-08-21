import React from 'react';
import {Icon} from "../icon/Icon";
import styled, {keyframes} from "styled-components";

const float = keyframes`
    0% {
        transform: translate(0, 0);
    }
    50% {
        transform: translate(10px ,10px);

    }
    100% {
        transform: translate(0, 0);
    }
`;

export function Logo() {
    return (
        <StyledLinks href="#">
            <Icon
                width={'50'} height={'50'} viewBox={'0 0 50 50'} urlIcon={'logo'}/>
        </StyledLinks>
    );
}
const StyledLinks = styled.a`
    animation: ${float} 3s ease-in-out infinite ;
`


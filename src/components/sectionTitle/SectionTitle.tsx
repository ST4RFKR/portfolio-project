import styled from 'styled-components';

import React from 'react';
import {Theme} from "../styles/Theme";
import {font} from "../styles/Common";

type SectionTitlePropsType = {
    title: string;
};

export function SectionTitle(props: SectionTitlePropsType) {
    return <StyledSectionTitle>{props.title}</StyledSectionTitle>;
}

export default SectionTitle;
const StyledSectionTitle = styled.h2`
    ${font({weight: 500,lineHeight:'69px', maxSize: 46,minSize: 36})};
    padding: 50px;
    
    @media ${Theme.media.table} {
        padding: 30px;
    }
    @media ${Theme.media.mobile} {
        padding: 15px;
    }
`;

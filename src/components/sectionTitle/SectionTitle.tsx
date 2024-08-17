import styled from 'styled-components';

import React from 'react';
import {Theme} from "../styles/Theme";

type SectionTitlePropsType = {
    title: string;
};

export function SectionTitle(props: SectionTitlePropsType) {
    return <StyledSectionTitle>{props.title}</StyledSectionTitle>;
}

export default SectionTitle;
const StyledSectionTitle = styled.h2`
    font-weight: 600;
    font-size: 46px;
    line-height: 69px;
    margin-bottom:${Theme.margin.main};
`;

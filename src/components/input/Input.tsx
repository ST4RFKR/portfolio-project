import React from 'react';
import styled from "styled-components";
import {Container} from "../container/Container.styled";
import SectionTitle from "../sectionTitle/SectionTitle";

type InputPropsType = {
    title: string
}

export function Input(props: InputPropsType) {
    const {title} = props;
    return (
        <StyledInputBox>
            <StyledLabel htmlFor={title.toLowerCase()}>{title}</StyledLabel>
            <StyledInput></StyledInput>
        </StyledInputBox>
    );
}

const StyledInputBox = styled.div`
    display: flex;
    flex-direction: column;
`
const StyledLabel = styled.label``
const StyledInput = styled.input``


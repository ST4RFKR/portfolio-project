import React from 'react';
import styled from 'styled-components';
import {Theme} from '../styles/Theme';

type InputPropsType = {
    title: string;
    placeholder: string;

};

export function Input(props: InputPropsType) {
    const {title, placeholder,} = props;
    return (
        <StyledInputBox>
            <StyledLabel htmlFor={title.toLowerCase()}>{title}</StyledLabel>
            <StyledInput placeholder={placeholder}></StyledInput>
        </StyledInputBox>
    );
}

const StyledInputBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 15px;
`;
const StyledLabel = styled.label`
    background: ${Theme.colors.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    color: transparent;
    margin-bottom: 5px;
`;
const StyledInput = styled.input`
    color: ${Theme.colors.mainText};
    display: inline-block;
    border: 2px solid;
    border-image: ${Theme.colors.gradient} 1;
    padding: 10px;
    background-color: ${Theme.colors.transparent};
`;

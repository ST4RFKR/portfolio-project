import React from 'react';
import styled from 'styled-components';
import { Container } from '../container/Container.styled';
import SectionTitle from '../sectionTitle/SectionTitle';
import { Theme } from '../styles/Theme';

type InputPropsType = {
  title: string;
  placeholder: string;
};

export function Input(props: InputPropsType) {
  const { title, placeholder } = props;
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
`;
const StyledLabel = styled.label`
  background: ${Theme.colors.gradientText};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
`;
const StyledInput = styled.input`
  color: ${Theme.colors.mainText};
  display: inline-block;
  border: 2px solid;
  border-image: ${Theme.colors.gradientText} 1;
  padding: 10px;
  background-color: ${Theme.colors.transparent};
`;

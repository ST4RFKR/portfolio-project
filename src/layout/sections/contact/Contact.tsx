import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/container/Container.styled";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import {Input} from "../../../components/input/Input";
import {Button} from "../../../components/button/Button";

export function Contact() {
    return (
        <StyledContact>
            <Container>
                <SectionTitle title={'Contact'}></SectionTitle>
                <Form>
                    <Input title={'Name'}/>
                    <Input title={'Email'}/>
                    <Input title={'Message'}></Input>
                    <Button as={'button'} type={'submit'}>Submit</Button>
                </Form>

            </Container>
        </StyledContact>
    );
}

const StyledContact = styled.section``

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
`



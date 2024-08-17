import React from 'react';
import styled from 'styled-components';
import {Container} from '../../../components/container/Container.styled';
import SectionTitle from '../../../components/sectionTitle/SectionTitle';
import {Input} from '../../../components/input/Input';
import {Link} from '../../../components/button/Link';

import {FlexContainer} from "../../../components/FlexContainer/FlexContainer";

export function Contact() {
    return (
        <StyledContact>
            <Container>
                <FlexContainer direction={'column'} align={'center'}>
                    <SectionTitle title={'Contact'}></SectionTitle>
                    <Form>
                        <Input placeholder={'Enter your name...'} title={'Name'}/>
                        <Input placeholder={'Enter your email...'} title={'Email'}/>
                        <Input placeholder={'Enter your message...'} title={'Message'}></Input>
                        <Link as={'button'} type={'submit'}>
                            Submit
                        </Link>
                    </Form>
                </FlexContainer>


            </Container>
        </StyledContact>
    );
}

const StyledContact = styled.section`
    position: relative;
    z-index: 1;
`;

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
`;

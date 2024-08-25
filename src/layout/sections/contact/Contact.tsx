import React, {ElementRef, useRef, useState} from 'react';
import styled from 'styled-components';
import {Container} from '../../../components/container/Container.styled';
import SectionTitle from '../../../components/sectionTitle/SectionTitle';
import {Input} from '../../../components/input/Input';
import {Link} from '../../../components/button/Link';

import {FlexContainer} from "../../../components/FlexContainer/FlexContainer";
import emailjs from '@emailjs/browser';

export function Contact() {
    const [message, setMessage] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    const form = useRef<ElementRef<'form'>>(null)
    const sendEmail = (e:any) => {
        e.preventDefault();

        if(!form.current) return;

        emailjs
            .sendForm('service_rm3vohk', 'template_bi2ci0m', form.current, {
                publicKey: 'h0O11n6SkuCi3YKTx',
            })
            .then(
                () => {
                    setMessage('Форма успешно отправлена!');
                    setTimeout(() => {setMessage(null)},3000)
                    setError(null);
                    e.target.reset();
                },
                (error) => {
                    setMessage(null);
                    setError('Произлошла ошибка при отравки формы.');
                    setTimeout(() => {setError(null)},3000)
                    e.target.reset();
                },
            );

    };

    return (
        <StyledContact id={'contact'}>
            <Container>
                <FlexContainer direction={'column'} align={'center'}>
                    <SectionTitle title={'Contact'}></SectionTitle>
                    <Form ref={form} onSubmit={sendEmail}>
                        <Input  placeholder={'Enter your name...'} title={'Name'} name="user_name"/>
                        <Input placeholder={'Enter your email...'} title={'Email'} name="user_email"/>
                        <Input placeholder={'Enter your message...'} title={'Message'} name="message"></Input>
                        <Link as={'button'} type={'submit'}>
                            Submit
                        </Link>
                    </Form>
                    {message && <SuccessMessage>{message}</SuccessMessage>}
                    {message && <ErrorMessage>{error}</ErrorMessage>}
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
const SuccessMessage = styled.p`
    color: green;
    margin-top: 20px;
`;

const ErrorMessage = styled.p`
    color: red;
    margin-top: 20px;
`;

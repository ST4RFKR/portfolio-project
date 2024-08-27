import React, {ElementRef, useRef, useState} from 'react';
import styled from 'styled-components';
import {Container} from '../../../components/container/Container.styled';
import SectionTitle from '../../../components/sectionTitle/SectionTitle';
import {Input} from '../../../components/input/Input';
import {Link} from '../../../components/button/Link';

import {FlexContainer} from "../../../components/FlexContainer/FlexContainer";
import emailjs from '@emailjs/browser';
import {Theme} from "../../../components/styles/Theme";



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
                    setTimeout(() => {setMessage(null)},1500)
                    setError(null);
                    e.target.reset();
                },
                (error) => {
                    setMessage(null);
                    setError('Произлошла ошибка при отравки формы.');
                    setTimeout(() => {setError(null)},1500)
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
                            {message ? <SuccessMessage>

                                <MessageContent>{message}</MessageContent>
                            </SuccessMessage> : 'Submit'}
                        </Link>
                    </Form>

                    {error && <ErrorMessage>{error}</ErrorMessage>}
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
const SuccessMessage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

`;
const MessageContent = styled.div`
    color: ${Theme.colors.mainText}
    padding-left: 22px;
    position: relative;
 
    &::after{
     position: absolute;
     content: '✅';
     top: -1px;
     left: -10px;
     transform: translateX(-50%);
     width: 20px;
     height: 20px;
 }
`

const ErrorMessage = styled.p`
    color: red;
    margin-top: 20px;
`;

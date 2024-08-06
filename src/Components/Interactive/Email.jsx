import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import { Input } from "@/shadcn/components/ui/input.jsx";
import { Button } from "@/shadcn/components/ui/button.jsx";

const EmailSignUp = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_0o7ifsm', 'template_avitq2w', form.current, {
                publicKey: 'NY8-arIuysHAX_GRn',
            })
            .then(
                () => {
                    console.log('Success');
                },
                (error) => {
                    console.log('Failed', error.text);
                },
            );
    };

    return (
        <div className={"mt-8 w-full flex justify-center items-center content-center"}>
            <form ref={form} onSubmit={sendEmail} className={"flex w-96"}>
                <Input type={"email"} name={"user_email"} placeholder={"Email"} className={"mr-2"}/>
                <Button type="submit">Lesgo</Button>
            </form>
        </div>
    );
};

export default EmailSignUp;
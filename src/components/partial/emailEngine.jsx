import { useEffect, useRef, useState } from "react";
import { Button, Form, Modal, Spinner } from "react-bootstrap";
import emailjs from '@emailjs/browser';
import { LangConfig } from "../../language/langConfig";

const EmailEngine = ({stateEmail,  callback}) => {
    const ls = LangConfig().profile
    const form = useRef()
    const [kirim, setKirim] = useState(false);
    const handleClose = () => {
        callback(false);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        await emailjs
            .sendForm(import.meta.env.VITE_SERVICE_KEY, import.meta.env.VITE_TEMPLATE_KEY, form.current, {
                publicKey: import.meta.env.VITE_PUBLIC_KEY,
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    callback(false);
                },
                (error) => {
                console.log('FAILED...', error.text);
                },
        );
        return setKirim(false)
    }

    useEffect(()=> {
        if (stateEmail == true) {
            callback(null)
        }
    },[stateEmail])
    useEffect(()=> {

    },[kirim])
    return(
        <Modal show={stateEmail}>
            <Form ref={form} onSubmit={handleSubmit}>
                <Modal.Header>
                    <Modal.Title>
                        {/* Email */}
                        {ls.medSos.name4}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>
                            {/* Name */}
                            {ls.email.name}
                        </Form.Label>
                        <Form.Control required name="user_name" type="text" placeholder="Danny" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>
                            {/* Email */}
                            {ls.email.Email}
                        </Form.Label>
                        <Form.Control required name="email" type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>
                            {/* Body */}
                            {ls.email.Body}
                        </Form.Label>
                        <Form.Control required  name="message" as="textarea" rows={3} />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="m-2" variant="secondary" onClick={handleClose}>
                        {/* Close */}
                        {ls.button1}
                    </Button>
                    <Button type="submit" className="m-2" variant="primary">
                        {kirim ? <Spinner color="primary"/> : ls.button2}
                    </Button>
                </Modal.Footer>    
            </Form>
        </Modal>
    )
}

export default EmailEngine;
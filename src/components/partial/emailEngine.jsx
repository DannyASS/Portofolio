import { useEffect, useRef, useState } from "react";
import { Button, Form, Modal, Spinner } from "react-bootstrap";
import emailjs from '@emailjs/browser';

const EmailEngine = ({stateEmail,  callback}) => {
    const form = useRef()
    const [kirim, setKirim] = useState(false);
    const handleClose = () => {
        callback(false);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setKirim(true)

        await emailjs
            .sendForm('service_hkplbp5', 'template_tmefrun', form.current, {
                publicKey: 'uNZ-b-_iPZrb25kEv',
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
                        Email
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control name="user_name" type="text" placeholder="Danny" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email</Form.Label>
                        <Form.Control name="email" type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Body</Form.Label>
                        <Form.Control  name="message" as="textarea" rows={3} />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="m-2" variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button type="submit" className="m-2" variant="primary">
                        {kirim ? <Spinner color="primary"/> : 'Kirim'}
                    </Button>
                </Modal.Footer>    
            </Form>
        </Modal>
    )
}

export default EmailEngine;
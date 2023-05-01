import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import Swal from 'sweetalert2';

function Contact() {
    const [subject, setSubject] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!subject || !email || !message) {
            Swal.fire({
                title: 'Error',
                text: 'Please fill in all fields',
                icon: 'error',
            });
            return;
        }
        // send email using a server-side API
        fetch('/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                subject,
                email,
                message,
            }),
        })
      .then((response) => {
          if (response.ok) {
              Swal.fire({
                  title: 'Success',
                  text: 'Email sent successfully',
                  icon: 'success',
              });
              setSubject('');
              setEmail('');
              setMessage('');
          } else {
              Swal.fire({
                  title: 'Error',
                  text: 'Failed to send email',
                  icon: 'error',
              });
          }
      })
            .catch((error) => {
                console.error(error);
                Swal.fire({
                    title: 'Error',
                    text: 'An error occurred while sending the email',
                    icon: 'error',
                });
            });
    };

    return (
        <div>
            <div className="alert alert-light" role="alert">
                <p>The function in this page is not open at the moment.</p>
                <p>If you need it, please send me an email at</p>
                <p>Ao.XIE@etu.isima.fr</p>
                <p>Thank you ;-)</p>
            </div>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formSubject" className='row align-items-center' style={{margin: '10px'}}>
                    <Form.Label className='col'>Subject</Form.Label>
                    <Form.Control
                        className='col'
                        type="text"
                        placeholder="Enter subject"
                        value={subject}
                        onChange={(event) => setSubject(event.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="formEmail" className='row align-items-center' style={{margin: '10px'}}>
                    <Form.Label className='col'>Email address</Form.Label>
                    <Form.Control
                        className='col'
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </Form.Group>
                <Form.Group controlId="formMessage" className='row align-items-center' style={{margin: '10px'}}>
                    <Form.Label className='col'>Message</Form.Label>
                    <Form.Control
                        className='col'
                        as="textarea"
                        rows={3}
                        placeholder="Enter message"
                        value={message}
                        onChange={(event) => setMessage(event.target.value)}
                    />
                </Form.Group>
                <Button className="btn btn-light" type="submit" style={{margin: '15px'}}>
                    Submit
                </Button>
            </Form>
        </div>
    );
}

export default Contact;

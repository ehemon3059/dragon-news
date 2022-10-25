import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
const Register = () => {

    const {creteUser} = useContext(AuthContext) ;

    const navigate = useNavigate()

    const handelSubmit = (event) =>{
        event.preventDefault();
       const form = event.target;
       const name = form.name.value;
       const photoURL = form.photoURL.value;
       const email = form.email.value;
       const password = form.password.value;
       console.log(name,photoURL,email,password);
       
       creteUser(email,password)
       .then(result => {
        const user = result.user;
        console.log(user);
        form.reset();
        navigate('/')
       })
       .catch(error => console.error(error));

    }
    return (
        <Form onSubmit={handelSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" name="name" placeholder="Enter name" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Photo URL</Form.Label>
                <Form.Control type="text" name='photoURL' placeholder="Enter photo url" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" name='email' placeholder="Enter email" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" name='password' placeholder="Password" required />
            </Form.Group>
      
            <Button variant="primary" type="submit">
                Register
            </Button>
            
            <Form.Text className="text-danger">
              
            </Form.Text>
        </Form>
    );
};

export default Register;
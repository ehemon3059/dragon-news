import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle ,FaGithub, FaFacebook,FaTwitter, FaWhatsapp,FaYoutube, FaInstagram } from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../BrandCarousel/BrandCarousel';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
const RightSideNav = () => {

    
    const {providerlogin} = useContext(AuthContext);
    
    const googleProvider = new GoogleAuthProvider();

    const handelGoogleSignIn = () =>{
        providerlogin(googleProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(error => console.error(error))
    }

    return (
        <div>
            <ButtonGroup vertical>
                <Button onClick={handelGoogleSignIn} className='mb-3' variant="outline-primary"><FaGoogle /> Login With Google</Button>
                <Button className='mb-3' variant="outline-dark"><FaGithub /> Login With GitHub</Button>
            </ButtonGroup>
            <div className="button-group">
                <h5 className='mb-2' >Find Us On</h5>
                <ListGroup>
                    <ListGroup.Item className='mb-2' ><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-2' ><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-2' ><FaWhatsapp /> Whatsapp</ListGroup.Item>
                    <ListGroup.Item className='mb-2' ><FaYoutube /> Youtube</ListGroup.Item>
                    <ListGroup.Item className='mb-2' ><FaInstagram /> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <div className="carosule">
                <BrandCarousel></BrandCarousel>
            </div>
        </div>
    );
};

export default RightSideNav;
import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle ,FaGithub, FaFacebook,FaTwitter, FaWhatsapp,FaYoutube, FaInstagram } from 'react-icons/fa';
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../BrandCarousel/BrandCarousel';
const RightSideNav = () => {
    return (
        <div>
            <ButtonGroup vertical>
                <Button className='mb-3' variant="outline-primary"><FaGoogle /> Login With Google</Button>
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
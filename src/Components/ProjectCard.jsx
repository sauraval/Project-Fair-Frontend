import React from 'react'
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { SiGithub } from "react-icons/si";
import { FaLink } from "react-icons/fa";



function ProjectCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Card style={{ width: '28rem' }} onClick={handleShow}>
        <Card.Img variant="top" src="http://www.centrinity.com/wp-content/uploads/2018/05/Image_1-1.jpeg" width={'100%'} height={'300px'} />
        <Card.Body>
          <Card.Title className='text-center'>Project Title</Card.Title>

        </Card.Body>
      </Card>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-6">
              <img src="http://www.centrinity.com/wp-content/uploads/2018/05/Image_1-1.jpeg" width={'100%'} alt="" />
            </div>
            <div className="col-6 text-center">
              <h2>Project Title</h2>
              <p style={{ textAlign: 'justify' }}>Description: Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis ipsum reprehenderit ipsam modi!</p>
              <p>Tetchnology used : <b>React, Node</b></p>

            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <div className='d-flex justify-content-between '>
            <Button className='me-5'><a href=""><SiGithub /></a></Button>
            <Button className='me-5'><a href=""><FaLink /></a></Button>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </div>

        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default ProjectCard
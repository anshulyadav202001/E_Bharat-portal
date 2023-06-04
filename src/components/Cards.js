import React from 'react'
import organizationDetails from './Organizationdetails.js'
import { Card, Col, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Sector from './Sector.js';
import './card.css'

const Cards = () => {
  return (
    <div>
     <h2 className='text-center p-4 text-uppercase'>Organization Categories</h2>
      <Row className="card-row p-5 w-100">
      {organizationDetails.map((card,index) => (
        <Col sm={12} md={4} className='mb-4'  key={index}>
          <Card className="card" style={{ backgroundColor: card.backgroundColor}}>
            <Card.Body>
              <div className="icon">
                <FontAwesomeIcon icon={card.icon} />
              </div>
              <Card.Title>{card.heading}</Card.Title>
              <Card.Text>{card.content}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    <div className='sector p-1'>
    <h3 className='p-3'>SECTOR</h3>
    <Row className="card-row p-5 w-100">
      {Sector.map((card,index) => (
        <Col sm={12} md={2} className='mb-4'  key={index}>
          <Card className="card" border="light" style={{ background: 'none',border:"none" }}>
            <Card.Body>
              <div className="icon">
                <FontAwesomeIcon icon={card.icon} />
              </div>
              <Card.Title>{card.heading}</Card.Title>
              <Card.Text>{card.content}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </div>

    </div>
  )
}

export default Cards
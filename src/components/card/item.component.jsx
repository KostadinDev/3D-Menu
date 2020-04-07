import React from 'react';
import './card.styles.css'
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Item = (props) => (
    <div className='card-container'>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{props.item.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">$ 5.00</Card.Subtitle>
                    <Card.Text>
                        <img alt={props.item.alt} src={props.item.image} style={{width: '160px', height: '160px'}} onClick={() => alert('hello')} />
                    </Card.Text>
                    <Card.Link href="#">Hologram</Card.Link>
                    <Card.Link href="#">Item Description</Card.Link>
                </Card.Body>
            </Card>
    </div>
);

import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
export default function Player({item}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        
        <Card.Title>Name:{item.name}</Card.Title>
        <Card.Title>age:{item.age}</Card.Title>
        <Card.Title>nationality:{item.nationality}</Card.Title>
        <Card.Title>team:{item.team}</Card.Title>
        <Card.Title>jursey_number:{item.jursey_number}</Card.Title>
        <Button variant="primary">Go somewhere</Button>

      </Card.Body>
    </Card>
  )
}

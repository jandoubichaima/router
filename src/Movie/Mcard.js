import { Button } from 'react-bootstrap'
import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Mcard(movie) {
  return (
    <div>
        <Card style={{ width: '18rem' }}>
     
  <Card.Img variant="top" src={movie.posterUrl} />
  <Card.Body>
    <Card.Title>{movie.Title}</Card.Title>
    <Card.Text>
      Description
    </Card.Text>
  <Link to={`/Movies/Description/${movie.id}`}> <Button variant="primary">Details</Button></Link>
  </Card.Body>
</Card>
    </div>
  )
}

export default Mcard
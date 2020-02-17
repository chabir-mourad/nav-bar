import React from 'react'
 import {Card} from  'react-bootstrap';
 import {Button} from  'react-bootstrap';
export default function cardspay(props) {
    return (
        <div>
            <div className="section6">
                <h2 className="centre-main">Improve the lives of millions.
Change yours forever</h2>
<p className="para-main">More than 1009 team mates share our same vision, goals and passion .
with offices in Warsaw, Barcelona, Istnbul, Rome,Mexicocitu and
curitiba,our search forgreat talent never stops.</p>
            </div>
<div className="cards">
    {props.pays.map(el=>(
        <div className="cards">
            <Card className="item" style={{ width: '18rem' }}>
  <Card.Img variant="top" src={el.images} />
  <Card.Body>
    <Card.Title>{el.titre}</Card.Title>

    <Button variant="primary">SEE OPENING</Button>
  </Card.Body>
</Card>
             </div>


    )
        )}
</div>
        </div>
    )
}

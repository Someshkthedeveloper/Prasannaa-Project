import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Prodectlist(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.Title}</Card.Title>
        <Card.Text>
          {props.price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Prodectlist;
import { FC } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './Contacts.scss';
import { Link } from 'react-router-dom';
import { Mate } from '../../utils/typedefs';

type Props = {
  mate: Mate,
};

export const ContactInfo: FC<Props> = ({ mate }) => {
  const {
    name,
    ghURL,
    imgURL,
    phone,
    email,
    liURL,
  } = mate;

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imgURL} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>Full Stack Developer</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          <Link to={ghURL}>GitHub</Link>
        </ListGroup.Item>

        <ListGroup.Item>
          <Link to={liURL}>LinkedIn</Link>
        </ListGroup.Item>
      </ListGroup>
      <Card.Body className="card__contacts">
        {phone ? (
          <Card.Link href={`tel:${phone}`}>
            {phone}
          </Card.Link>
        ) : 'No phone'}
        {email ? (
          <Card.Link href={`mailto:${email}`}>
            Email
          </Card.Link>
        ) : 'No email'}
      </Card.Body>
    </Card>
  );
};

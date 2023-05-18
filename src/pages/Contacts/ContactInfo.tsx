import { FC, useContext } from 'react';
import Card from 'react-bootstrap/Card';
import './Contacts.scss';
import { Link } from 'react-router-dom';
import { Mate } from '../../utils/typedefs';
import { getCurrentImage } from '../../utils/utils';
import * as images from '../../assets';
import { ThemeContext } from '../../context/ThemeContext';

type Props = {
  mate: Mate,
};

export const ContactInfo: FC<Props> = ({ mate }) => {
  const {
    name,
    text,
    ghURL,
    imgURL,
    phone,
    email,
    liURL,
  } = mate;

  const { theme } = useContext(ThemeContext);

  const currentLogoPhone = getCurrentImage(
    theme,
    images.phone_logo,
    images.phone_logo_dark,
  );
  const currentLogoGitHub = getCurrentImage(
    theme,
    images.github_logo,
    images.github_logo_dark,
  );
  const currentLogoEmail = getCurrentImage(
    theme,
    images.email_logo,
    images.email_logo_dark,
  );
  const currentLogoLinkedin = getCurrentImage(
    theme,
    images.linkedin_logo,
    images.linkedin_logo_dark,
  );

  return (
    <Card style={{ width: '18rem', cursor: 'default' }} className="card">
      <Card.Img
        variant="top"
        src={imgURL}
      />

      <Card.Body>
        <Card.Title>
          {name}
        </Card.Title>

        <Card.Text>
          {text}
        </Card.Text>
      </Card.Body>

      <Card.Body className="card__socials">
        <Link to={`tel:${phone}`}>
          <img
            src={currentLogoPhone}
            alt="phone"
            className="card__item-img"
          />
        </Link>

        <Link
          to={ghURL}
          className="card__item"
          target="_blank"
        >
          <img
            src={currentLogoGitHub}
            alt="github"
            className="card__item-img"
          />
        </Link>

        <Link to={liURL} target="_blank">
          <img
            src={currentLogoLinkedin}
            alt="linkedin"
            className="card__item-img"
          />
        </Link>

        <Link to={`mailto:${email}`} target="_blank">
          <img
            src={currentLogoEmail}
            alt="email"
            className="card__item-img"
          />
        </Link>
      </Card.Body>
    </Card>
  );
};

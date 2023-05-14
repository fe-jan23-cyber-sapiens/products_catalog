import { FC } from 'react';
import './Contacts.scss';
import { mates } from './mates';
import { ContactInfo } from './ContactInfo';

export const Contacts: FC = () => {
  return (
    <div className="contacts">
      {mates.map(mate => (
        <ContactInfo mate={mate} key={mate.name} />
      ))}
    </div>
  );
};

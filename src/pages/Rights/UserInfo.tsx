/* eslint-disable max-len */
import { FC } from 'react';
import { Mate } from '../../utils/typedefs';

interface Props {
  mate: Mate,
}

export const UserInfo: FC<Props> = ({ mate }) => {
  const { name, text, ghURL } = mate;

  return (
    <li>
      <em>
        {name}
        <pre>
          <strong>{text}</strong>
        </pre>
      </em>

      <a href={ghURL} rel="nofollow noreferrer" target="_blank">
        <img
          src="https://img.shields.io/badge/Profile_link-4e93e6?style=for-the-badge&logo=Profile&logoColor=black"
          alt="profile"
        />
      </a>
    </li>
  );
};

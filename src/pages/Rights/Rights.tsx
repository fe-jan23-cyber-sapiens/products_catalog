import { FC } from 'react';
import { mates } from '../Contacts/mates';
import { UserInfo } from './UserInfo';
import './Rights.scss';

export const Rights: FC = () => (
  <div className="rights">
    <a href="https://git.io/typing-svg">
      <img
        // eslint-disable-next-line max-len
        src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=700&size=75&pause=1000&repeat=false&width=700&height=130&lines=Cyber+Sapiens+%F0%9F%94%A5"
        alt="Typing SVG"
        className="rights__logo"
      />
    </a>

    <p className="rights__paragraph">
      Welcome to the Cyber Sapiens Squad! We are a group of software development
      professionals who are collaborating on the
      Nice Gadgets 👌
      <br />
      e-commerce platform.
    </p>

    <h2 className="rights__title">Project Overview</h2>

    <p className="rights__paragraph">
      The goal of this project is to create a robust and user-friendly
      e-commerce website. The Nice Gadgets 👌 platform allow customers to browse
      and search for products, view detailed product descriptions and images,
      and make purchases online. The shop also include features such as a
      shopping cart, favourite products, checkout process.
    </p>

    <h2 className="rights__title">Team Members</h2>

    <ul className="rights__list">
      {mates.map((mate) => (
        <UserInfo mate={mate} key={mate.name} />
      ))}
    </ul>

    <h2 className="rights__title">Communication and Collaboration</h2>

    <p className="rights__paragraph">
      We are using GitHub for version control, issue tracking, and
      collaboration. Each team member has access to the project repository and
      is responsible for creating and resolving issues, submitting pull
      requests, and reviewing code. We also have regular meetings to discuss
      project progress, assign tasks, and address any issues or concerns.
      Communication primarily occurs through Slack, but we also use video
      conferencing for larger meetings.
    </p>

    <h2 className="rights__title">Conclusion</h2>

    <p className="rights__paragraph">
      We are excited to work together on this project and create a high-quality
      e-commerce website. With our combined skills and experience, we are
      confident that we can deliver a product that meets the needs of our
      customers and exceeds their expectations.
    </p>

    <h3 className="rights__title">Glory to Ukraine!</h3>

    <img
      // eslint-disable-next-line max-len
      src="https://user-images.githubusercontent.com/91826635/180657972-20a1444b-d558-4823-8b13-99419fdef67b.png"
      alt="glory to Ukraine"
    />
  </div>
);

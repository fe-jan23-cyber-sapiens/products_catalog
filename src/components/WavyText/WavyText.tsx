import { FC } from 'react';
import './WavyText.scss';

interface Props {
  text: string,
}

interface Styles extends React.CSSProperties {
  '--i': number;
}

export const WavyText: FC<Props> = ({ text }) => {
  return (
    <div className="wave">
      <div className="wave__text">
        {text.split('').map((char, idx) => {
          const styles: Styles = {
            '--i': idx + 1,
          };

          return (
            <span
              key={text.slice(idx)}
              style={styles}
              className="wave__char"
            >
              {char === ' '
                ? <div style={{ width: '10px' }} />
                : char}
            </span>
          );
        })}
      </div>
    </div>
  );
};

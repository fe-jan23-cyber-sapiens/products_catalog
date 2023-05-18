import { FC } from 'react';
import './Search.scss';

interface Props {
  query: string,
  onChange: (option: string) => void,
}

export const Search: FC<Props> = (props) => {
  const {
    query,
    onChange,
  } = props;

  return (
    <div className="search">
      <p className="dropdown__title">
        Search for model
      </p>

      <input
        type="text"
        value={query}
        placeholder="Search"
        className="search__input"
        onChange={(e) => onChange(e.target.value)}
      />

      {query && (
        <button
          type="button"
          className="search__button"
          onClick={() => onChange('')}
        >
          x
        </button>
      )}
    </div>
  );
};

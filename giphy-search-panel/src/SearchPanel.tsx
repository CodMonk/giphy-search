/**
 * Sub Component which is rendered inside GiphyPanel.tsx
 * This includes HTML for search bar and search button
 */
import React, { useState } from 'react';

/**
 * searchImage : Function passed from GiphyPanel for searching the images.
 * This function is called when user clicks on the search button or press a enter key
 */
interface Props {
  searchImage: Function;
}
export const SearchPanel: React.FC<Props> = ({ searchImage }) => {
  const [searchText, setText] = useState('');
  const [buttonStatus, disableButton] = useState(true);

  /**
   * Sets the search text state
   * @param e | HTML Target
   */
  const onTexthange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setText(value);
    if (value.trim() !== '') {
      disableButton(false);
    } else {
      disableButton(true);
    }
  };

  return (
    <div>
      <input
        id="search-input"
        className="search-input"
        placeholder="Enter text to search ..."
        value={searchText}
        onChange={onTexthange}
        onKeyPress={(e) => e.key === 'Enter' && searchImage(searchText)}
      ></input>
      <button
        disabled={buttonStatus}
        id="search-button"
        className="search-button"
        onClick={() => {
          searchImage(searchText);
        }}
        type="submit"
      >
        {' '}
        Search{' '}
      </button>
    </div>
  );
};

import React, { useState } from 'react';

const Search: React.FC<Record<string, never>> = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleClear = () => {
    setSearchValue('');
  };

  return (
    <div className="flex w-full">
      <div className="relative flex-1 pl-2">
        <input
          className="w-full flex h-12 border-1 rounded-l-md p-4 pr-10"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          placeholder="May not find anything bc it's a fake site"
        />
        {searchValue && (
          <button
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 p-3 text-black hover:text-purple-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        )}
      </div>
      <button className="w-14 h-12 bg-purple-100 hover:bg-purple-200 flex justify-center items-center rounded-r-md">
        <div className="w-6 h-6 text-white">
          <svg
            focusable="false"
            viewBox="0 0 24 24"
            role="img"
            aria-label="Search"
            fill="currentColor"
            stroke="currentColor"
          >
            <title>Search</title>
            <path d="M18.75 17.94l-4.53-4.53A5.44 5.44 0 0015.5 9.9a5.51 5.51 0 10-2 4.22l4.5 4.53a.52.52 0 00.71 0 .51.51 0 00.04-.71zM5.5 9.9a4.5 4.5 0 114.5 4.5 4.51 4.51 0 01-4.5-4.5z"></path>
          </svg>
        </div>
      </button>
    </div>
  );
};

export default Search;

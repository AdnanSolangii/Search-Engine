import { useState } from 'react';
import React from 'react';
import './WikipediaEngine.css';

const WikipediaEngine = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);
  const [searchInfo, setSearchInfo] = useState({});

  const handleSearch = async (e) => {
    e.preventDefault();
    if (search === "") return;
    const endpoint = `https://en.wikipedia.org/w/api.php?action=query&list=search&props=info&inprop=url&utf8=&format=json&origin=*&srlimit=20&srsearch=${search}`;

    try {
      const response = await fetch(endpoint);
      if (!response.ok) {
        throw Error(response.statusText);
      }
      const json = await response.json();
      setResults(json.query.search);
      setSearchInfo(json.query.searchinfo);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  return (
    <div>
      <header>
        <h1>Wikipedia Search Engine</h1>
        <form className='search-box' onSubmit={handleSearch}>
          <input
            type="search"
            placeholder='What are you looking for?'
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
        </form>
        <p>Search Results: {searchInfo.totalhits || 0}</p>
      </header>
      <div className="results">
        {results.map(result => (
          <div className="result" key={result.pageid}>
            <h3>{result.title}</h3>
            <p dangerouslySetInnerHTML={{ __html: result.snippet }}></p>
            <a
              href={`https://en.wikipedia.org/?curid=${result.pageid}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WikipediaEngine;

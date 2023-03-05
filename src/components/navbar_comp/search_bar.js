import React, { useState } from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import styles from './searchbar.module.css';

const SearchBar = () => {
  const [showRecommendations, setShowRecommendations] = useState(false);
  const [recommendations, setRecommendations] = useState([]);

  const handleSearchInputFocus = () => {
    // TODO: fetch recommended search terms from API
    setRecommendations(["term 1", "term 2", "term 3"]);
    setShowRecommendations(true);
  };

  const handleSearchInputBlur = () => {
    setShowRecommendations(false);
  };

  const handleRecommendationClick = (term) => {
    // TODO: perform search with selected term
    console.log(`Performing search for ${term}`);
  };

  return (
    <div className="flex items-center mx-auto">
      <div className={styles.searchBar}>
        <input
          className={`px-4 py-2 bg-gray-100 rounded-xl focus:outline-none ${styles.searchInput}`}
          type="text"
          placeholder="Search"
          onFocus={handleSearchInputFocus}
          onBlur={handleSearchInputBlur}
        />
        {showRecommendations && (
          <div className={styles.recommendations}>
            {recommendations.map((term) => (
              <div
                key={term}
                className={styles.recommendation}
                onClick={() => handleRecommendationClick(term)}
              >
                {term}
              </div>
            ))}
          </div>
        )}
      </div>
      <div
        className="bg-blue-600 rounded-xl w-14 h-10 flex items-center justify-center"
        style={{ backgroundColor: '#0773B4', borderLeft: 'none', borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
      >
        <AiOutlineSearch className="text-white" />
      </div>
    </div>
  );
};

export default SearchBar;

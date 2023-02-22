import React from 'react';
import { AiOutlineSearch } from "react-icons/ai";
import styles from './searchbar.module.css';
const SearchBar = () => {
  return (
    <div className="flex items-center mx-auto">
    <div className={styles.searchBar}>
    <input
  className="px-4 py-2 bg-gray-100 rounded-full focus:outline-none"
  type="text"
  placeholder="Search"
  style={{ width: '150%' }}
/>
    </div>
    
    <div
      className="bg-blue-600 rounded-full w-10 h-8 flex items-center justify-center"
      style={{ backgroundColor: '#0773B4', borderLeft: 'none', borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
    >
      <AiOutlineSearch className="text-white" />
    </div>
  </div>
      );
    };
    
export default SearchBar;
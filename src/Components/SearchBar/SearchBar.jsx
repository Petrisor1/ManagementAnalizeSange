import React, { useState } from 'react';
import styled from 'styled-components';

const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;

const SearchInput = styled.input`
  flex-grow: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
`;

const FilterSelector = styled.select`
  margin-left: 10px;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
const NavItem = styled.button`
  display: flex;

  align-items: center;
  align-content: center;
  justify-content: center;
  padding: 10px 10px;
 margin-left: 10px;
  border: none;
  background-color: #3c4858;
  color: #dcdde1;
  font-size: 18px;
  text-align: left;
  cursor: pointer;
  border-radius: 10px;
  
  transition: background-color 0.2s, transform 0.2s;

  &:hover {
    background-color: #4b6584;
    transform: scale(1.05);
  }

  &:focus {
    outline: none;
  }
`;

const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filter, setFilter] = useState('all');
  
    const handleSearch = (event) => {
      event.preventDefault();
      onSearch(searchTerm, filter);
    };
  
    return (
      <SearchBarContainer>
        <SearchInput
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search clients..."
        />
        <FilterSelector value={filter} onChange={(e) => setFilter(e.target.value)}>
          <option value="all">Cauta dupa</option>
          <option value="filter1">CNP</option>
          <option value="filter2">Nume </option>
          {/* Add more filter options as needed */}
        </FilterSelector>
        <NavItem onClick={handleSearch}>Search</NavItem>
      </SearchBarContainer>
    );
  };
  
  export default SearchBar;
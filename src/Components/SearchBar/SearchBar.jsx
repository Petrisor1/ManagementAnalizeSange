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
  // stilizarea ta aici
`;

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('name');

  const handleSearchInputChanges = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFilterChanges = (e) => {
    setFilter(e.target.value);
  };

  const callSearchFunction = (e) => {
    e.preventDefault();
    onSearch(searchTerm, filter);
  };

  return (
    <SearchBarContainer>
      <SearchInput
        type="text"
        value={searchTerm}
        onChange={handleSearchInputChanges}
        placeholder="Caută..."
      />
      <FilterSelector value={filter} onChange={handleFilterChanges}>
        <option value="name">Nume</option>
        <option value="cnp">CNP</option>
      </FilterSelector>
      <NavItem onClick={callSearchFunction}>CĂUTARE</NavItem>
    </SearchBarContainer>
  );
};

export default SearchBar;

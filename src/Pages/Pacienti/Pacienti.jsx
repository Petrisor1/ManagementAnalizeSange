import React from 'react';
import SearchBar from '../../Components/SearchBar/SearchBar';

const Pacienti=()=>{
    const handleSearch = (searchTerm, filter) => {
        console.log(`Searching for '${searchTerm}' with filter '${filter}'`);
        // Implement your search and filter logic here
      };
      
      return (
        <div>
          <SearchBar onSearch={handleSearch} />
          {/* The rest of your component */}
        </div>
      );
}

export default Pacienti;


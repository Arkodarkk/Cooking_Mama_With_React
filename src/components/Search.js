import React, { useState } from 'react';

const Search = ({ onSearch }) => {
   const [searchValue, setSearchValue] = useState("");

   const handleChange = (e) => {
      setSearchValue(e.target.value);
      onSearch(e.target.value);
   };

   const handleReset = () => {
      setSearchValue("")
      onSearch("o");
   };

   return (
      <div className="searchbox-container">
         <form className="search-box">
            <input type="text" placeholder="Tapez le nom d'un aliment (en anglais)" value={searchValue} onChange={handleChange} />
            <button type="reset" onClick={handleReset}></button>
         </form>
      </div>
   );
};

export default Search;
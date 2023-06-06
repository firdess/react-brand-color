import React, { useContext } from 'react';
import { GrSearch } from 'react-icons/gr';
import MainContext from '../MainContext';

export default function Search() {
  const { search, setSearch } = useContext(MainContext);

  return (
    <div className="search">
      <button className="icon">
        <GrSearch />
      </button>
      <input type="text" onChange={(e) => setSearch(e.target.value)} placeholder="Search Brands" />

    </div>
  )
}

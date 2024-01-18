import React from "react";

export default function SearchBar() {
  return (
    <div className="header-input flex">
      <input
        type="text"
        alt="search"
        placeholder="Search here..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <CiSearch color="rgba(0, 142, 204, 1)" fontSize="18px" />
    </div>
  );
}

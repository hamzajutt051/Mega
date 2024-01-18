import { FaAngleDown } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

import React from "react";

export default function SearchBar({
  search,
  setSearch,
  categories,
  category,
  setCategory,
}) {
  const [show, setShow] = React.useState(false);

  return (
    <div className="header-search order-2 ">
      <div
        className="header-dropdown flex"
        onClick={() => {
          setShow(!show);
        }}
      >
        <p>{category || "All"}</p>
        <FaAngleDown />

        {show && (
          <div className="header-sub-menu">
            <ul>
              <li onClick={() => setCategory("")}>All</li>
              {categories.map((category) => (
                <li
                  key={category}
                  onClick={() => {
                    setCategory(category);
                    setShow(false);
                  }}
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
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
    </div>
  );
}

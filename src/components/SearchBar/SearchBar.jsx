import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import "./search-bar.css";

const SearchBar = () => {
  return (
    <section className='search__bar'>
        <form action="" className="container search__bar-container">
            <div>
              <AiOutlineSearch/>
              <input type="search" name="" id="" placeholder='Search ....'/>
            </div>
            <button type='submit' className='btn__search'>
              Go
            </button>
        </form>
    </section>
  )
};

export default SearchBar;

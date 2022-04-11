import React from "react";

import "../styles/SearchBox.css";

const SearchBox = (props) => {
    return (
        <div className="search-box">
            <input
                type="text"
                placeholder="Enter name"
                onChange={props.handleSearchTxtChange}
            />
            <select onChange={props.handleSearchTypeChange}>
                <option value="users">Users</option>
                <option value="repositories">Repositories</option>
            </select>
            <p className="button" onClick={props.handleSearch}>
                Search
            </p>
        </div>
    );
};

export default SearchBox;

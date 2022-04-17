import React from "react";
import question from "../images/question.svg";
import "../styles/SearchBox.css";

const SearchBox = (props) => {
    return (
        <div className="search-box">
            <div className="search">
                <input
                    type="text"
                    placeholder="Enter name"
                    onChange={props.handleSearchTxtChange}
                />
                <select onChange={props.handleSearchTypeChange}>
                    <option value="users">Users</option>
                    <option value="repositories">Repositories</option>
                </select>
                <button className="button" onClick={props.handleSearch}>
                    <span>Search </span>
                </button>
            </div>
            <div className="token">
                <input
                    type="password"
                    placeholder="Paste GitHub Token"
                    onChange={props.handleTokenChange}
                />
                <img
                    src={question}
                    alt="question"
                    width="25px;"
                    onClick={props.handleQuestion}
                />
            </div>
        </div>
    );
};

export default SearchBox;

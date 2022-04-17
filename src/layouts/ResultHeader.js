import React from "react";
import sortdesc from "../images/sort-desc.svg";
import sortasc from "../images/sort-asc.svg";
import "../styles/ResultHeader.css";

const ResultHeader = (props) => {
    let sortElementsArray = [];
    const userSortElementsArray = ["", "repositories", "followers", "joined"];
    const repoSortElementsArray = ["", "stars", "forks", "updated"];

    if (props.searchType === "users") {
        sortElementsArray = userSortElementsArray;
    }
    if (props.searchType === "repositories") {
        sortElementsArray = repoSortElementsArray;
    }

    return (
        <div className="result-header">
            <div className="sort-box">
                <p>Sort by:</p>
                <select onChange={props.handleSortChange} value={props.sortVal}>
                    {sortElementsArray.map((elem) => {
                        return (
                            <option value={elem} key={elem}>
                                {elem}
                            </option>
                        );
                    })}
                </select>
                <img
                    src={props.order === "desc" ? sortdesc : sortasc}
                    alt="sortdesc"
                    width="22px"
                    onClick={props.handleOrderChange}
                />
            </div>

            <div className="page-switch">
                <div className="page-prev" onClick={props.handlePrevPageChange}>
                    {" "}
                    &#60;{" "}
                </div>
                <input
                    type="text"
                    className="page-number"
                    value={props.page}
                    disabled
                />
                <div className="page-next" onClick={props.handleNextPageChange}>
                    {" "}
                    &#62;{" "}
                </div>
            </div>

            <div className="results-numbers">
                <p>Results per page:</p>
                <input
                    type="number"
                    onChange={props.handlePageResultsChange}
                    value={props.pageResults}
                />
            </div>
        </div>
    );
};

export default ResultHeader;

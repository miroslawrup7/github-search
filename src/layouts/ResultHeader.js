import React from "react";
import sortdesc from "../images/sort-desc.svg";
import "../styles/ResultHeader.css";

const ResultHeader = () => {
    return (
        <div className="result-header">
            <div className="sort-box">
                <p>Sort by:</p>
                <select>
                    <option value="users">stars</option>
                    <option value="repositories">stars2</option>
                </select>
                <img src={sortdesc} alt="sortdesc" width="22px" />
            </div>

            <div className="page-switch">
                <div className="page-prev"> &#60; </div>
                <div className="page-number">6</div>
                <div className="page-next"> &#62; </div>
            </div>

            <div className="results-numbers">
                <p>Results per page:</p>
                <input type="text" defaultValue={30} />
            </div>
        </div>
    );
};

export default ResultHeader;

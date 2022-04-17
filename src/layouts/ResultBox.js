import React from "react";
import ResultHeader from "./ResultHeader";
import ResultContent from "./ResultContent";
import "../styles/ResultBox.css";

const ResultBox = (props) => {
    return (
        <div className="result-box">
            <ResultHeader
                page={props.page}
                handleNextPageChange={props.handleNextPageChange}
                handlePrevPageChange={props.handlePrevPageChange}
                handlePageResultsChange={props.handlePageResultsChange}
                pageResults={props.pageResults}
                searchType={props.searchType}
                handleSortChange={props.handleSortChange}
                sortVal={props.sortVal}
                handleOrderChange={props.handleOrderChange}
                order={props.order}
            />
            <ResultContent
                users={props.users}
                repos={props.repos}
                searchType={props.searchType}
                token={props.token}
            />
        </div>
    );
};

export default ResultBox;

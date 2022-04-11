import React from "react";
import ResultHeader from "./ResultHeader";
import ResultContent from "./ResultContent";
import ResultFooter from "./ResultFooter";
import "../styles/ResultBox.css";

const ResultBox = (props) => {
    return (
        <div className="result-box">
            <ResultHeader />
            <ResultContent users={props.users} />
            <ResultFooter />
        </div>
    );
};

export default ResultBox;

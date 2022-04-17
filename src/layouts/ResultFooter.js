import React from "react";

import "../styles/ResultFooter.css";

const ResultFooter = () => {
    return (
        <div className="result-footer">
            <div className="page-switch">
                <div className="page-prev"> &#60; </div>
                <div className="page-number">6</div>
                <div className="page-next"> &#62; </div>
            </div>
        </div>
    );
};

export default ResultFooter;

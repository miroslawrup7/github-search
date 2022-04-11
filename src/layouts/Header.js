import React from "react";
import "../styles/Header.css";
import githubLogo from "../images/github.svg";

const Header = () => {
    return (
        <div className="header">
            <img src={githubLogo} alt="github-logo" width="60px" />
            <h1>Github Search</h1>
        </div>
    );
};

export default Header;

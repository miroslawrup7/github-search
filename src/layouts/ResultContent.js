import React, { useState, useEffect } from "react";
import axios from "axios";
import UserBox from "../components/UserBox";
import RepoBox from "../components/RepoBox";

import "../styles/ResultContent.css";

const ResultContent = (props) => {
    const axiosConfig = {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/vnd.github.v3+json",
        },
    };

    let usersHTML = props.users.map((user) => {
        return (
            <UserBox
                key={user.id}
                avatar={user.avatar_url}
                login={user.login}
            />
        );
    });

    return (
        <div className="result-content">
            {usersHTML}
            <RepoBox />
        </div>
    );
};

export default ResultContent;

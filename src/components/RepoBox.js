import React, { useState } from "react";
import axios from "axios";
import "../styles/RepoBox.css";

const RepoBox = (props) => {
    const axiosConfig = {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/vnd.github.v3+json",
            Authorization: "Token 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",
        },
    };

    const [commitsArray, setCommitsArray] = useState([]);
    const [contributorsArray, setContributorsArray] = useState([]);

    const handleCommitsClick = (e) => {
        setContributorsArray([]);

        const targetRepoBox = e.target.closest(".main-box").nextSibling;
        targetRepoBox.classList.toggle("show-commits-details");
        targetRepoBox.classList.remove("show-contributors-details");

        if (targetRepoBox.classList.contains("show-commits-details")) {
            e.target.classList.add("selectedBtn");
            e.target.parentNode.nextSibling.firstChild.classList.remove(
                "selectedBtn"
            );
        } else {
            e.target.classList.remove("selectedBtn");
        }

        axios
            .get(props.commits_url, axiosConfig)
            .then((res) => {
                setCommitsArray(res.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const handleContributorsClick = (e) => {
        setCommitsArray([]);

        const targetRepoBox = e.target.closest(".main-box").nextSibling;
        targetRepoBox.classList.toggle("show-contributors-details");
        targetRepoBox.classList.remove("show-commits-details");

        if (targetRepoBox.classList.contains("show-contributors-details")) {
            e.target.classList.add("selectedBtn");
            e.target.parentNode.previousSibling.firstChild.classList.remove(
                "selectedBtn"
            );
        } else {
            e.target.classList.remove("selectedBtn");
        }

        axios
            .get(props.contributors_url, axiosConfig)
            .then((res) => {
                setContributorsArray(res.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <div className="repo-box">
            <div className="main-box">
                <div className="repo-name">
                    <h2>{props.name}</h2>
                    <div className="dates">
                        <p className="stars-forks">
                            stars: <span>{props.stars}</span>
                        </p>
                        <p className="stars-forks">
                            forks: <span>{props.forks}</span>
                        </p>
                        <p className="size-lang">
                            language: <span>{props.language}</span>
                        </p>
                        <p className="size-lang">
                            size: <span>{props.size} MB</span>
                        </p>
                        <p>
                            created at: <span>{props.createdAt}</span>
                        </p>
                        <p>
                            updated at: <span>{props.updatedAt}</span>
                        </p>
                    </div>
                </div>
                <div className="repo-data">
                    <div className="commits elem">
                        <div
                            className="quantity-box"
                            onClick={handleCommitsClick}
                        >
                            Commits
                        </div>
                    </div>
                    <div className="contributors elem">
                        <div
                            className="quantity-box"
                            onClick={handleContributorsClick}
                        >
                            Contributors
                        </div>
                    </div>
                    <div className="owner elem">
                        <div className="owner-box no-border">
                            <img src={props.avatar} alt="user-avatar" />
                        </div>
                        <div className="owner-name">{props.login}</div>
                    </div>
                </div>
            </div>
            <div className="detail-box">
                {commitsArray.map((commit) => {
                    return (
                        <a
                            href={commit.html_url}
                            key={commit.html_url}
                            target="_blank"
                            rel="noreferrer"
                        >
                            {commit.commit.message}
                        </a>
                    );
                })}
                {contributorsArray.map((contributor) => {
                    return (
                        <a
                            className="contributorImg"
                            href={contributor.html_url}
                            key={contributor.login}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={contributor.avatar_url} alt="avatar" />
                            {contributor.login}
                        </a>
                    );
                })}
            </div>
        </div>
    );
};

export default RepoBox;

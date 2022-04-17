import React from "react";
import UserBox from "../components/UserBox";
import RepoBox from "../components/RepoBox";
import "../styles/ResultContent.css";

const ResultContent = (props) => {
    let usersHTML = "";

    if (props.searchType === "users") {
        usersHTML = props.users.map((user) => {
            return (
                <UserBox
                    key={user.id}
                    avatar={user.avatar_url}
                    login={user.login}
                    user_url={user.url}
                    html_url={user.html_url}
                    repos_url={user.repos_url}
                    followers_url={user.followers_url}
                    following_url={user.following_url.slice(
                        0,
                        user.following_url.length - 13
                    )}
                    token={props.token}
                />
            );
        });
    } else if (props.searchType === "repositories") {
        usersHTML = props.repos.map((repo) => {
            return (
                <RepoBox
                    key={repo.id}
                    name={repo.name}
                    avatar={repo.owner.avatar_url}
                    login={repo.owner.login}
                    createdAt={repo.created_at.substr(0, 10)}
                    updatedAt={repo.updated_at.substr(0, 10)}
                    size={(repo.size / 1024).toFixed(2)}
                    language={repo.language}
                    commits_url={repo.commits_url.slice(
                        0,
                        repo.commits_url.length - 6
                    )}
                    contributors_url={repo.contributors_url}
                    stars={repo.stargazers_count}
                    forks={repo.forks_count}
                    token={props.token}
                />
            );
        });
    }

    return <div className="result-content">{usersHTML}</div>;
};

export default ResultContent;

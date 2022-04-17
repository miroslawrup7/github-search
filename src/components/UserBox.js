import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/UserBox.css";

const UserBox = (props) => {
    const axiosConfig = {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/vnd.github.v3+json",
            Authorization: "Token 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",
        },
    };

    const [repos, setRepos] = useState(0);
    const [followers, setFollowers] = useState(0);
    const [following, setFollowing] = useState(0);
    const [createdAt, setCreatedAt] = useState("");
    const [updatedAt, setUpdateddAt] = useState("");
    const [reposArray, setReposArray] = useState([]);
    const [followersArray, setFollowersArray] = useState([]);
    const [followingArray, setFollowingArray] = useState([]);

    const getRepos = () => {
        axios
            .get(props.user_url, axiosConfig)
            .then((res) => {
                setRepos(res.data.public_repos);
                setFollowers(res.data.followers);
                setFollowing(res.data.following);
                setCreatedAt(res.data.created_at.substr(0, 10));
                setUpdateddAt(res.data.updated_at.substr(0, 10));
            })
            .catch((error) => {
                console.error(error);
            });
    };

    useEffect(() => {
        getRepos();
    }, []);

    const handleReposClick = (e) => {
        setFollowersArray([]);
        setFollowingArray([]);

        const targetUserBox = e.target.closest(".main-box").nextSibling;
        targetUserBox.classList.toggle("show-repo-details");
        targetUserBox.classList.remove("show-followers-details");
        targetUserBox.classList.remove("show-following-details");

        if (targetUserBox.classList.contains("show-repo-details")) {
            e.target.classList.add("selectedBtn");
            e.target.parentNode.nextSibling.firstChild.classList.remove(
                "selectedBtn"
            );
            e.target.parentNode.nextSibling.nextSibling.firstChild.classList.remove(
                "selectedBtn"
            );
        } else {
            e.target.classList.remove("selectedBtn");
        }

        axios
            .get(e.target.dataset.repos, axiosConfig)
            .then((res) => {
                setReposArray(res.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const handleFollowersClick = (e) => {
        setReposArray([]);
        setFollowingArray([]);

        const targetUserBox = e.target.closest(".main-box").nextSibling;
        targetUserBox.classList.toggle("show-followers-details");
        targetUserBox.classList.remove("show-repo-details");
        targetUserBox.classList.remove("show-following-details");

        if (targetUserBox.classList.contains("show-followers-details")) {
            e.target.classList.add("selectedBtn");
            e.target.parentNode.nextSibling.firstChild.classList.remove(
                "selectedBtn"
            );
            e.target.parentNode.previousSibling.firstChild.classList.remove(
                "selectedBtn"
            );
        } else {
            e.target.classList.remove("selectedBtn");
        }

        axios
            .get(e.target.dataset.followers, axiosConfig)
            .then((res) => {
                setFollowersArray(res.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    const handleFollowingClick = (e) => {
        setReposArray([]);
        setFollowersArray([]);

        const targetUserBox = e.target.closest(".main-box").nextSibling;
        targetUserBox.classList.toggle("show-following-details");
        targetUserBox.classList.remove("show-repo-details");
        targetUserBox.classList.remove("show-followers-details");

        if (targetUserBox.classList.contains("show-following-details")) {
            e.target.classList.add("selectedBtn");
            e.target.parentNode.previousSibling.firstChild.classList.remove(
                "selectedBtn"
            );
            e.target.parentNode.previousSibling.previousSibling.firstChild.classList.remove(
                "selectedBtn"
            );
        } else {
            e.target.classList.remove("selectedBtn");
        }

        axios
            .get(e.target.dataset.following, axiosConfig)
            .then((res) => {
                setFollowingArray(res.data);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <>
            <div className="user-box">
                <div className="main-box">
                    <div className="user-data">
                        <img src={props.avatar} alt="user-avatar" />
                        <h2>{props.login}</h2>
                        <div className="details">
                            <p>
                                created at: <span>{createdAt}</span>
                            </p>
                            <p>
                                updated at: <span>{updatedAt}</span>
                            </p>
                            <p>
                                <span>
                                    <a
                                        href={props.html_url}
                                        target="_blank"
                                        rel="noreferrer"
                                    >
                                        {props.html_url}
                                    </a>
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className="repos-data">
                        <div className="repositories elem">
                            <div
                                className="quantity-box"
                                data-repos={props.repos_url}
                                onClick={handleReposClick}
                            >
                                {repos}
                            </div>
                            <div className="quantity-title">Repositories</div>
                        </div>
                        <div className="followers elem">
                            <div
                                className="quantity-box"
                                data-followers={props.followers_url}
                                onClick={handleFollowersClick}
                            >
                                {followers}
                            </div>
                            <div className="quantity-title">Followers</div>
                        </div>
                        <div className="subscriptions elem">
                            <div
                                className="quantity-box"
                                data-following={props.following_url}
                                onClick={handleFollowingClick}
                            >
                                {following}
                            </div>
                            <div className="quantity-title">Following</div>
                        </div>
                    </div>
                </div>
                <div className="detail-box">
                    {reposArray.map((repo) => {
                        return (
                            <a
                                href={repo.html_url}
                                key={repo.html_url}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {repo.html_url.slice(
                                    repo.html_url.lastIndexOf("/") + 1
                                )}
                            </a>
                        );
                    })}
                    {followersArray.map((follower) => {
                        return (
                            <div key={follower.html_url}>
                                <a
                                    className="followerImg"
                                    href={follower.html_url}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        src={follower.avatar_url}
                                        alt="avatar"
                                    />
                                    {follower.html_url.slice(
                                        follower.html_url.lastIndexOf("/") + 1
                                    )}
                                </a>
                            </div>
                        );
                    })}
                    {followingArray.map((following) => {
                        return (
                            <div key={following.html_url}>
                                <a
                                    className="followingImg"
                                    href={following.html_url}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <img
                                        src={following.avatar_url}
                                        alt="avatar"
                                    />
                                    {following.html_url.slice(
                                        following.html_url.lastIndexOf("/") + 1
                                    )}
                                </a>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default UserBox;

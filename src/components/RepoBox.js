import React from "react";
import "../styles/RepoBox.css";
import repo from "../images/repo.svg";
import userAvatar from "../images/user-avatar.jpg";

const ResultBox = () => {
    return (
        <div className="repo-box">
            <div className="repo-name">
                <img src={repo} alt="repo" />
                <h2>OhDrop!</h2>
            </div>
            <div className="repo-data">
                <div className=" commits elem">
                    <div className="quantity-box">67</div>
                    <div className="quantity-title">Commits</div>
                </div>
                <div className=" contributors elem">
                    <div className="quantity-box">29</div>
                    <div className="quantity-title">Contributors</div>
                </div>
                <div className="owner elem">
                    <div className="quantity-box no-border">
                        <img src={userAvatar} alt="user-avatar" />
                    </div>
                    <div className="owner-name">Jan Kowalski</div>
                    <div className="quantity-title">Owner</div>
                </div>
            </div>
        </div>
    );
};

export default ResultBox;

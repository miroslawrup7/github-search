import React from "react";
import "../styles/UserBox.css";

const UserBox = (props) => {
    return (
        <div className="user-box">
            <div className="user-data">
                <img src={props.avatar} alt="user-avatar" />
                <h2>{props.login}</h2>
            </div>
            <div className="repos-data">
                <div className="repositories elem">
                    <div className="quantity-box">75</div>
                    <div className="quantity-title">Repositories</div>
                </div>
                <div className="followers elem">
                    <div className="quantity-box">43</div>
                    <div className="quantity-title">Followers</div>
                </div>
                <div className=" subscriptions elem">
                    <div className="quantity-box">128</div>
                    <div className="quantity-title">Subscriptions</div>
                </div>
            </div>
        </div>
    );
};

export default UserBox;

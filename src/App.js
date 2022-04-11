import React, { useState } from "react";
import axios from "axios";
import Header from "./layouts/Header";
import SearchBox from "./layouts/SearchBox";
import ResultBox from "./layouts/ResultBox";
import "./App.css";

function App() {
    const [users, setUsers] = useState([]);
    const [searchTxt, setSearchTxt] = useState("");
    const [searchType, setSearchType] = useState("users");

    const axiosConfig = {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/vnd.github.v3+json",
        },
    };

    const handleSearch = () => {
        if (!searchTxt) {
            setUsers([]);
        } else {
            axios
                .get(
                    "https://api.github.com/search/" +
                        searchType +
                        "?q=" +
                        searchTxt,
                    axiosConfig
                )
                .then((res) => {
                    setUsers(res.data.items);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    };

    const handleSearchTxtChange = (e) => {
        setSearchTxt(e.target.value);
    };

    const handleSearchTypeChange = (e) => {
        setSearchType(e.target.value);
        console.log(searchType);
    };

    return (
        <div className="app">
            <header>{<Header />}</header>
            <main>
                {
                    <SearchBox
                        handleSearch={handleSearch}
                        handleSearchTxtChange={handleSearchTxtChange}
                        handleSearchTypeChange={handleSearchTypeChange}
                    />
                }
                {<ResultBox users={users} />}
            </main>

            <footer>{/* {<Footer />} */}</footer>
        </div>
    );
}

export default App;

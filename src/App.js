import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./layouts/Header";
import SearchBox from "./layouts/SearchBox";
import ResultBox from "./layouts/ResultBox";
import xmark from "./images/xmark.svg";
import "./App.css";

function App() {
    const [users, setUsers] = useState([]);
    const [repos, setRepos] = useState([]);
    const [searchTxt, setSearchTxt] = useState("");
    const [searchType, setSearchType] = useState("users");
    const [page, setPage] = useState(1);
    const [pageResults, setPageResults] = useState(30);
    const [sortVal, setSortVal] = useState("");
    const [order, setOrder] = useState("desc");
    const [token, setToken] = useState("");
    const [showHelp, setShowHelp] = useState(false);

    // test

    const axiosConfig = {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/vnd.github.v3+json",
            Authorization: "Token " + token,
        },
    };

    const handleSearchAfterPageChange = () => {
        if (searchTxt) {
            if (searchType === "users") {
                axios
                    .get(
                        `https://api.github.com/search/users?q=${searchTxt}&page=${page}&per_page=${pageResults}&sort=${sortVal}&order=${order}`,
                        axiosConfig
                    )
                    .then((res) => {
                        setUsers(res.data.items);
                    })
                    .catch((error) => {
                        if (error.response.status === 401) {
                            alert("Invalid GitHub token!");
                        }
                    });
            } else if (searchType === "repositories") {
                axios
                    .get(
                        `https://api.github.com/search/repositories?q=${searchTxt}&page=${page}&per_page=${pageResults}&sort=${sortVal}&order=${order}`,
                        axiosConfig
                    )
                    .then((res) => {
                        setRepos(res.data.items);
                    })
                    .catch((error) => {
                        if (error.response.status === 401) {
                            alert("Invalid GitHub token!");
                        }
                    });
            }
        } else {
            setUsers([]);
            setRepos([]);
            setPage(1);
            setSortVal("");
        }
    };

    const handleSearch = () => {
        if (page !== 1) {
            setPage(1);
            handleSearchAfterPageChange();
        } else {
            handleSearchAfterPageChange();
        }
    };

    const handleSearchTxtChange = (e) => {
        setSearchTxt(e.target.value);
    };

    const handleSearchTypeChange = (e) => {
        setSearchType(e.target.value);
        setUsers([]);
        setRepos([]);
        setPage(1);
        setSortVal("");
    };

    const handleNextPageChange = () => {
        setPage((prevValue) => prevValue + 1);
    };

    const handlePrevPageChange = () => {
        if (page > 1) {
            setPage((prevValue) => prevValue - 1);
        }
    };

    const pageResultsValidate = (val) => {
        if (val !== "") {
            let valNr = Number(val);
            if (typeof valNr === "number") {
                if (valNr < 0 || valNr > 100) {
                    setPageResults(30);
                } else {
                    setPageResults(valNr);
                }
            }
        }
    };

    const handlePageResultsChange = (e) => {
        pageResultsValidate(e.target.value);
    };

    const handleSortChange = (e) => {
        setSortVal(e.target.value);
    };

    const handleOrderChange = (e) => {
        order === "desc" ? setOrder("asc") : setOrder("desc");
    };

    const handleTokenChange = (e) => {
        setToken(e.target.value);
    };

    const handleQuestion = () => {
        setShowHelp(!showHelp);
    };

    useEffect(() => {
        handleSearchAfterPageChange();
    }, [page, pageResults, sortVal, order]);

    return (
        <div className="app">
            <header>{<Header />}</header>
            <main>
                {
                    <SearchBox
                        handleSearch={handleSearch}
                        handleSearchTxtChange={handleSearchTxtChange}
                        handleSearchTypeChange={handleSearchTypeChange}
                        handleTokenChange={handleTokenChange}
                        handleQuestion={handleQuestion}
                    />
                }
                {
                    <ResultBox
                        users={users}
                        repos={repos}
                        searchType={searchType}
                        page={page}
                        handleNextPageChange={handleNextPageChange}
                        handlePrevPageChange={handlePrevPageChange}
                        handlePageResultsChange={handlePageResultsChange}
                        pageResults={pageResults}
                        handleSortChange={handleSortChange}
                        sortVal={sortVal}
                        handleOrderChange={handleOrderChange}
                        order={order}
                        token={token}
                    />
                }
            </main>

            <footer>&copy; TEKK7</footer>
            <div id="helpbox" className={showHelp ? "active" : ""}>
                <div className="help-wrapper">
                    <div className="help-content">
                        <p>
                            Aby uzyskać GitHub token musisz być zarejestrowanym
                            użytkownikiem GitHub. Po zalogowaniu token
                            wygenerujesz pod adresem:
                            <br />
                            <br />{" "}
                            <a
                                href="https://github.com/settings/tokens"
                                target="_blank"
                                rel="noreferrer"
                            >
                                https://github.com/settings/tokens
                            </a>
                        </p>
                    </div>
                    <div className="close-btn">
                        <img
                            src={xmark}
                            alt="xmark"
                            width="20px"
                            onClick={handleQuestion}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;

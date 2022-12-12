import React, { useEffect, useState } from "react";

import "./Search.css";

import styled, { css } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getDataAPI } from "../../../utils/fetchData";
import { Link } from "react-router-dom";
import SearchUser from "./SearchUser";

function Search(props) {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([]);

  const { auth } = useSelector((state) => state);
  const dipatch = useDispatch();

  useEffect(() => {
    if (search && auth.token) {
      getDataAPI(`search?username=${search}`, auth.token)
      .then((response) => setUsers(response.data.users))
      .catch(err => {console.log(err)})
    }
  });

  return (
    <div className="search">
      <div className="searchBar">
        <div className="buttonMan">
          <button className="buttonDawg">
            <div className="ImageStack">
              <img
                className="imgP"
                src={require("../../../assets/search.png")}
              ></img>
              <input
                value={search}
                id="search"
                type="text"
                className="placeholderINPUT"
                placeholder=""
                onChange={(e) =>
                  setSearch(e.target.value.toLowerCase().replace(/ /g, ""))
                }
              />
            </div>
          </button>
        </div>
      </div>

      <div className="users">
        {users.map((user) => {
          <div className="testing123123">
            {user._id}
            <Link key={user._id} to={`/profile:${user.id}`}>
              <SearchUser user={user} />

            </Link>
          </div>;
        })}
      </div>
    </div>
  );
}

export default Search;

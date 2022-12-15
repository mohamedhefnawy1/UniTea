
import React, { Component } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

import './Suggested_friend.css'

import Follow from "../../pages/Profile/Follow";

function Suggested_Friend({user}) {
  console.log(`user=${user}`);
  return (
    <div class="yasta">
      <div class="rowYasta">
      <Link to={`/profile:${user._id}`} style={{ textDecoration: 'none'}}>
        <img class="imgYasta" src={user.profilePic}></img>
      </Link>
      {/* <Link to={`/profile:${user._id}`} style={{ textDecoration: 'none'}}> */}
        <span class="userYasta">{user.username}</span>
      {/* </Link> */}
        <div className="followYasta">
          <Follow user={user}></Follow>
        </div>
       
      </div>
    </div>
  );
}

export default Suggested_Friend;


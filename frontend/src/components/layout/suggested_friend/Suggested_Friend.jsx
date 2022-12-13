
import React, { Component } from "react";
import styled, { css } from "styled-components";

import './Suggested_friend.css'

import Follow from "../../pages/Profile/Follow";

function Suggested_Friend({user}) {
  console.log(`user=${user}`);
  return (
    <div class="yasta">
      <div class="rowYasta">
        <img class="imgYasta" src={user.profilePic}></img>
        <span class="userYasta">{user.username}</span>
        <Follow user={user} class="followYasta">Follow</Follow>
      </div>
    </div>
  );
}

export default Suggested_Friend;
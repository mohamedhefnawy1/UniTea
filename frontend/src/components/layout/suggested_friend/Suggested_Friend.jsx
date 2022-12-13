
import React, { Component } from "react";
import styled, { css } from "styled-components";

import './Suggested_Friend.css'

import Follow from "../../pages/Profile/Follow";

function Untitled(props) {
  return (
    <div class="yasta">
      <div class="rowYasta">
        <img class="imgYasta" src={require("../../../assets/profile_pic.png")}></img>
        <span class="userYasta">User01</span>
        <Follow class="followYasta">Follow</Follow>
      </div>
    </div>
  );
}

export default Untitled;
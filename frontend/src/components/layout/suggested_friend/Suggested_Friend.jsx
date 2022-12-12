import React, { Component } from "react";
import styled, { css } from "styled-components";

function Untitled(props) {
  return (
    <div class="yasta">
      <div class="rowYasta">
        <img class="imgYasta" src={require("../../../assets/profile_pic.png")}></img>
        <span class="userYasta">User01</span>
        <span class="followYasta">Follow</span>
      </div>
    </div>
  );
}

export default Untitled;

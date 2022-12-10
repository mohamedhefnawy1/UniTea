import React, { Component } from "react";
import styled, { css } from "styled-components";

function Untitled(props) {
  return (
    <Rect>
      <ImageRow>
        <Image src={require("../../../assets/profile_pic.png")}></Image>
        <User01>User01</User01>
        <Follow>Follow</Follow>
      </ImageRow>
    </Rect>
  );
}

const Rect = styled.div`
  // display: flex;
  // width: 175px;
  // height: 46px;
  // background-color: #E6E6E6;
  // flex-direction: row;
  // margin-top: 261px;
  // margin-left: 635px;
`;

const Image = styled.img`
  height: 39px;
  width: 100%;
  object-fit: contain;
`;

const User01 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  margin-left: 11px;
  margin-top: 12px;
`;

const Follow = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: rgba(0,116,113,1);
  font-size: 11px;
  margin-left: 15px;
  margin-top: 13px;
`;

const ImageRow = styled.div`
  height: 39px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: 28px;
  margin-left: 6px;
  margin-top: 4px;
`;

export default Untitled;

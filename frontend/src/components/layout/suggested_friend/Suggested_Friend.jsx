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
width: fit-content;
display: grid;
grid-template-columns: auto auto;
align-items: center;
padding: 15px 0px;
padding-left: 15px;

`;

const Image = styled.img`
max-width: 40px;
`;

const User01 = styled.span`
padding-left: 5px;
text-decoration: none;
font-size: 14px;
color: black;
display: flex;
align-items: center
`;

const Follow = styled.span`

  color: rgba(0,116,113,1);
  font-size: 14px;
  display: flex;
  align-items: center;
  padding-left: 25px;
  justify-content: center;
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
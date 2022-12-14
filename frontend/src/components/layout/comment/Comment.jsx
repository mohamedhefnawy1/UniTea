import React, { Component } from "react";
import styled, { css } from "styled-components";

function Comment(postInfo) {
  const postInfoParsed = postInfo.postInfo[0].content
  console.log(postInfoParsed)
  return (
    <Rect>
      <User01Row>
        <User01>User01</User01>
        <LoremIpsum>:</LoremIpsum>
        <ThisIsAComment>{postInfoParsed}</ThisIsAComment>
      </User01Row>
    </Rect>
  );
}

const Rect = styled.div`
  display: flex;
  width: auto;
  height: 46px;
  background-color: #E6E6E6;
  flex-direction: row;
  margin-top: 0px;
  margin-left: 0px;
`;

const User01 = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  margin-top: 1px;
`;

const LoremIpsum = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
`;

const ThisIsAComment = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  line-height: 14px;
  margin-left: 3px;
  margin-top: 3px;
`;

const User01Row = styled.div`
  height: 17px;
  flex-direction: row;
  display: flex;
  flex: 1 1 0%;
  margin-right: 168px;
  margin-left: 7px;
  margin-top: 12px;
`;

export default Comment;

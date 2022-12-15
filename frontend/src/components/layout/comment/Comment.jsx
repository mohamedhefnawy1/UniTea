import React, { Component } from "react";
import styled, { css } from "styled-components";
import Avatar from "../../pages/Profile/Avatar";
import { Link } from "react-router-dom";
import './Comment.css'

function Comment({ commentInfo }) {
  return (
    <div className="comment-main-holder">
      <Rect>
        <User01Row>
          <div className="img-comment">
          <Link to={`/profile:${commentInfo.user._id}`} style={{ textDecoration: 'none'}}>
            <Avatar src={commentInfo.user.profilePic} size="comment-avatar" />
          </Link>
          </div>
          <User01>
          <Link to={`/profile:${commentInfo.user._id}`} style={{ textDecoration: 'none' }}>
            <div className="username-comment">
                <p>
                {commentInfo.user.username}:
              </p>
            </div>
          </Link>
          </User01>
          <ThisIsAComment>
            <div className="content-comment">{commentInfo.content}</div>
          </ThisIsAComment>
        </User01Row>
      </Rect>

    </div>
  );
}

const Rect = styled.div`
  display: flex;
  width: auto;
  height: 46px;

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

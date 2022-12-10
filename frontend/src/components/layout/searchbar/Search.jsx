import React, { Component } from "react";
import styled, { css } from "styled-components";

function Index(props) {
  return (
    <Button>
      <ButtonOverlay>
        <ImageStack>
          <Image src={require("./assets/images/image_iWP8..png")}></Image>
          <Placeholder placeholder=""></Placeholder>
        </ImageStack>
      </ButtonOverlay>
    </Button>
  );
}
const Button = styled.div`
  width: 282px;
  height: 39px;
  background-color: #E6E6E6;
  flex-direction: column;
  display: flex;
  border: none;
`;

const ButtonOverlay = styled.button`
 display: block;
 background: none;
 height: 100%;
 width: 100%;
 border:none
 `;
const Image = styled.img`
  position: absolute;
  top: 6px;
  left: 241px;
  height: 28px;
  width: 27px;
  object-fit: contain;
`;

const Placeholder = styled.input`
  font-family: Roboto;
  top: 0px;
  left: 0px;
  position: absolute;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 39px;
  width: 282px;
  border: none;
  background: transparent;
`;

const ImageStack = styled.div`
  width: 282px;
  height: 39px;
  position: relative;
`;

export default Index;

import React, { Component } from "react";
import styled, { css } from "styled-components";

function Index(props) {
  return (
    <div className='buttonMan'>
      <button className='buttonDawg'>
        <div>
          <img className='imgP' src={require("../../../assets/images/image_iWP8..png")}></img>
          <input className="placeholderINPUT" placeholder=""></input>
        </div>
      </button>
    </div>
  );
}


export default Index;

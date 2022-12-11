import React, { Component } from "react";

import './Search.css';

import styled, { css } from "styled-components";

function Search(props) {
  return (
    <div className='buttonMan'>
      <button className='buttonDawg'>
        <div className='ImageStack'>
          <img className='imgP' src={require("../../../assets/search.png")}></img>
          <input className="placeholderINPUT" placeholder=""></input>
        </div>
      </button>
    </div>
  );
}


export default Search;

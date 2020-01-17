import React from "react";
import meme from "../image/me.png";

function Works() {
  return (
    <div className="Work">
      <div className="List" id="code">
        <p className="Text-1">CODE</p>
        <hr></hr>
        <div className="List-sub">
          <p className="Text-2">WEB</p>
          <div className="List-work">
            <div className="Work-container">
              <img src={meme}></img>
              <p>Name1</p>
              <p>Description</p>
            </div>
            <div className="Work-container">
              <img src={meme}></img>
              <p>Name1</p>
              <p>Description</p>
            </div>
            <div className="Work-container">
              <img src={meme}></img>
              <p>Name1</p>
              <p>Description</p>
            </div>
          </div>
        </div>
        <div className="List-sub">
          <p className="Text-2">OTHERS</p>
          <div className="List-work">
            <div className="Work-container">
              <img src={meme}></img>
              <p>Name1</p>
              <p>Description</p>
            </div>
            <div className="Work-container">
              <img src={meme}></img>
              <p>Name1</p>
              <p>Description</p>
            </div>
            <div className="Work-container">
              <img src={meme}></img>
              <p>Name1</p>
              <p>Description</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Works;

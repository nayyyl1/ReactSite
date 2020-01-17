import React, { useEffect, useState } from "react";
import Navheader from "./Navheader";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expand: "true"
    };
  }
  render() {
    return (
      <div>
        <div className="Sidebar">
          <p className="Text-1 Name">KEXIN ZHENG</p>
          <div className="Menu">
            <p className="Text-2">ABOUT</p>
            <hr></hr>
            <div className="Menu-group">
              <a href="#code" className="Text-2">
                CODE
              </a>
              <div className="Menu-2">
                <a href="#" className="Text-3">
                  WEB
                </a>
                <a href="#" className="Text-3">
                  OTHER
                </a>
              </div>
            </div>
            <div className="Menu-group">
              <a href="#" className="Text-2">
                VISUAL
              </a>
              <div className="Menu-2">
                <a href="#" className="Text-3">
                  GRAPHIC
                </a>
                <a href="#" className="Text-3">
                  PHOTO/VIDEO
                </a>
                <a href="#" className="Text-3">
                  INSTALLATION
                </a>
                <a href="#" className="Text-3">
                  DRAWING
                </a>
              </div>
              <div className="Menu-group">
                <a href="#" className="Text-2">
                  RESUME
                </a>
              </div>
              <div className="Menu-group">
                <a href="https://github.com/nayyyl1" className="Text-2">
                  GITHUB
                </a>
              </div>
            </div>
          </div>
          <div className="footer">
            <p className="Text-footer">Created by Kexin ZHENG @ 2020</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;

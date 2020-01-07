import React from "react";

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expand: "true"
    };
  }

  render() {
    return (
      <div className="Sidebar" breakpoints={{ 768: { display: "none" } }}>
        <p className="Text-1 Name">KEXIN ZHENG</p>
        <div className="Menu">
          <p className="Text-2">ABOUT</p>
          <hr></hr>
          <div className="Menu-group">
            <p className="Text-2">CODE</p>
            <div className="Menu-2">
              <p className="Text-3">WEB</p>
              <p className="Text-3">OTHER</p>
            </div>
          </div>
          <div className="Menu-group">
            <p className="Text-2">VISUAL</p>
            <div className="Menu-2">
              <p className="Text-3">GRAPHIC</p>
              <p className="Text-3">PHOTO/VIDEO</p>
              <p className="Text-3">INSTALLATION</p>
              <p className="Text-3">DRAWING</p>
            </div>
            <div className="Menu-group">
              <p className="Text-2">RESUME</p>
            </div>
          </div>
        </div>
        <div className="footer">
          <p className="Text-footer">Created by Kexin ZHENG @ 2020</p>
        </div>
      </div>
    );
  }
}

export default Sidebar;

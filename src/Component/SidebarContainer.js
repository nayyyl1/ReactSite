import React from "react";
import Sidebar from "./Sidebar";
import Navheader from "./Navheader";

class SidebarContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expand: "false"
    };
    this.shout = this.shout.bind(this);
  }

  shout = () => {
    if (window.innerWidth > 1000) {
      this.setState({
        expand: "true"
      });
    } else if (this.state.expand) {
      this.setState({
        expand: "false"
      });
    }
  };

  componentDidMount() {
    window.addEventListener("resize", this.shout);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.shout);
  }

  renderSidebar = () => {
    if (window.innerWidth < 1000) {
      return (
        <div style={fullSidebar}>
          <Sidebar></Sidebar>
        </div>
      );
    } else {
      return (
        <div>
          <Sidebar></Sidebar>
        </div>
      );
    }
  };

  clickExpand = () => {
    const expandForm = this.state.expand;
    this.setState(prevState => ({
      expand: !prevState.expand
    }));
    console.log(expandForm);
  };

  renderButton = () => {
    return (
      <div className="Navheader" onClick={this.clickExpand}>
        <Navheader></Navheader>
      </div>
    );
  };

  renderThis = () => {
    if (window.innerWidth > 1000) return this.renderSidebar();
    else {
      if (!this.state.expand) {
        return (
          <div>
            {this.renderSidebar()}
            {this.renderButton()}
          </div>
        );
      } else {
        return <div>{this.renderButton()}</div>;
      }
    }
  };

  render() {
    return <div>{this.renderThis()}</div>;
  }
}

var fullSidebar = {
  backgroundColor: "white",
  width: window.innerWidth,
  height: window.innerHeight
};

export default SidebarContainer;

import React from "react";
import p5 from "p5";
import P5Wrapper from "react-p5-wrapper";
var colours = "orange";
const P5 = ({ setup, draw, mouseClicked }) => {
  const sketch = p5 => {
    p5.setup = () => setup(p5);
    p5.draw = () => draw(p5);
    p5.mouseClicked = function() {
      if (colours == "orange") colours = "green";
      else colours = "orange";
    };
  };
  new p5(sketch);

  return <></>;
};

function Background() {
  function setup(p5) {
    p5.createCanvas(window.innerWidth, window.innerHeight);
    p5.frameRate(30);
    p5.background(255);
    p5.rectMode(p5.CENTER);
  }

  function draw(p5) {
    p5.background(255);
    p5.push();
    p5.fill(colours);
    p5.strokeWeight(0);
    p5.translate(p5.mouseX, p5.mouseY);
    p5.rotate(p5.radians(p5.frameCount));
    p5.rect(0, 0, 50, 50);
    p5.pop();
  }

  return (
    <div>
      <P5 setup={setup} draw={draw} />
    </div>
  );
}

export default Background;

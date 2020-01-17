import React from "react";
import p5 from "p5";

export default function sketch(p5) {
  p5.setup = function() {
    p5.createCanvas(window.innerWidth, window.innerHeight);
    p5.frameRate(30);
    p5.rectMode(p5.CENTER);
  };

  var colours = "orange";
  p5.draw = function() {
    p5.background(255);
    p5.push();
    p5.fill(colours);
    p5.strokeWeight(0);
    p5.translate(p5.mouseX, p5.mouseY);
    p5.rotate(p5.radians(p5.frameCount));
    p5.rect(0, 0, 50, 50);
    p5.pop();
  };

  p5.mouseClicked = function() {
    if (colours == "orange") colours = "green";
    else colours = "orange";
  };
}

import React from "react";

function BackgroundIcon({ icon, height, width, top, left, bottom, right }) {
  const positionStyle = {
    position: "absolute",
    width: `${width}px`,
    height: `${height}px`,
  };

  if (top !== undefined) {
    positionStyle.top = top;
  }

  if (left !== undefined) {
    positionStyle.left = left;
  }

  if (bottom !== undefined) {
    positionStyle.bottom = bottom;
  }

  if (right !== undefined) {
    positionStyle.right = right;
  }

  return <img src={icon} style={positionStyle} />;
}

export default BackgroundIcon;

import React from "react";

const CustomTick = ({ x, y, payload }) => {
  const logoFileName = payload.value.toLowerCase().replace(/\s|\//g, "_");

  // Pick logo size dynamically based on screen width
  let size = 48; // desktop default
  if (window.innerWidth < 600) size = 20;
  if (window.innerWidth < 400) size = 16;

  return (
    <g transform={`translate(${x}, ${y})`}>
      <image
        href={`/programming_logos/${logoFileName}.svg`}
        x={-size / 2}   // <-- center horizontally
        y={0}
        width={size}
        height={size}
        preserveAspectRatio="xMidYMid meet"
      />
    </g>
  );
};

export default CustomTick;

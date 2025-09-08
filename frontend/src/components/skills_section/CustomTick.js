import React from "react";

const CustomTick = ({ x, y, payload }) => {
  // Match the "language" from your dataset
  const logoFileName = payload.value.toLowerCase().replace(/\s|\//g, "_"); 
  console.log("Tick logo path:", `/programming_logos/${logoFileName}.svg`);
  return (
    <image
      href={`/programming_logos/${logoFileName}.svg`}
      x={x - 24}   // adjust offset so image is centered
      y={y}   // adjust vertical placement
      width={48}
      height={48}
      preserveAspectRatio="xMidYMid meet"
    />
  );
};

export default CustomTick;

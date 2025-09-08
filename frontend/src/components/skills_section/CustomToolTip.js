import React from "react";

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const { experience, project } = payload[0].payload; // grab fields from your data
    return (
      <div
        style={{
          backgroundColor: "white",
          border: "1px solid #ccc",
          padding: "10px",
          borderRadius: "5px"
        }}
      >
        <p style={{ margin: 0, color: '#333' }}><strong>{label}</strong></p>
        <p style={{ margin: 0, color: '#777'}}>Years of Experience: {experience}</p>
        <p style={{ margin: 0, color: '#777' }}>Most Recent Project: {project}</p>
      </div>
    );
  }
  return null;
};

export default CustomTooltip;

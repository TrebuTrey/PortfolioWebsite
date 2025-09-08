import React from 'react';
import { programmingLanguages } from '../../data/data';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";
import CustomTooltip from './CustomToolTip';

export default function ProgramBarChart(){
    return(
        <ResponsiveContainer width= "85%" height="100%">
            <BarChart
                data={programmingLanguages}
                margin={{ top: 20, right: 50, bottom: 20 }}
            >
                <text
                x="50%"
                y={10}
                textAnchor="middle"
                dominantBaseline="middle"
                style={{ fontSize: 18, fontWeight: "bold", fill: "#fff" }}
                >
                Programming Experience
                </text>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="language" 
                tick={{ fill: "#fff", fontSize: 14, fontWeight: "bold" }}
                />
                <YAxis tick={{ fill: "#fff", fontSize: 14 }}
                label={{ 
                    value: "Years Experience", 
                    angle: -90, 
                    position: "insideLeft",
                    offset: 15, // tweak this to move it closer/further from axis
                    style: { textAnchor: "middle", fill: "#fff", fontWeight: "bold" }
                }} 
                />
                <Tooltip content={<CustomTooltip />}/>
                <Bar dataKey="experience" fill="#14b8a6" name="Years of Experience" />
            </BarChart>
        </ResponsiveContainer>
    );
}
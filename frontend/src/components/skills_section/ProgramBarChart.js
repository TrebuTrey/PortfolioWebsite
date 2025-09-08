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
import CustomTick from './CustomTick';

export default function ProgramBarChart(){
    return(
        <ResponsiveContainer width= "85%" height="100%">
            <BarChart
                data={programmingLanguages}
                margin={{ top: 30, right: 50, bottom: 15 }}
            >
                <text
                    x="50%"
                    y={8}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    style={{ fontSize: 18, fontWeight: "bold", fill: "#fff" }}
                >
                Programming Experience
                </text>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis 
                    dataKey="language" 
                    tick={<CustomTick />}
                    height={50} // increase this until the images fit
                />
                <YAxis 
                    tick={{ fill: "#fff", fontSize: 14 }}
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